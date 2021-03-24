/* global L:readonly */

import {
  integerNumberCheck
} from './util.js';

import {
  getRandomLocations
} from './data.js';

import {
  getOfferValues
} from './card-data.js';

import {
  formDeactivation,
  formActivation
} from './form-state.js';

const tripInformationFormAddress = document.querySelector('#address');

const latValue = 35.68950;
const lngValue = 139.69171;

const iconWidth = 40;
const iconHeight = 60;
const iconAnchorWidth = iconWidth / 2;

const pointsCheck = getRandomLocations;

// formDeactivation();

const map = L.map('map-canvas')
  .on('load', () => {
    formActivation();
    tripInformationFormAddress.value = `${latValue}, ${lngValue}`;
  })
  .setView({
    lat: latValue,
    lng: lngValue,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const customMarker = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [iconWidth, iconHeight],
  iconAnchor: [iconAnchorWidth, iconHeight],
});

const mainPinMarker = L.marker({
  lat: latValue,
  lng: lngValue,
}, {
  draggable: true,
  icon: customMarker,
}).addTo(map);

mainPinMarker.on('move', (evt) => {
  const currentLat = evt.target.getLatLng().lat;
  const currentLng = evt.target.getLatLng().lng;
  tripInformationFormAddress.value = `${integerNumberCheck(currentLat)}, ${integerNumberCheck(currentLng)}`;
});

pointsCheck.forEach((offer) => {
  const {
    lat,
    lng,
  } = offer.location;

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [iconWidth, iconHeight],
    iconAnchor: [iconAnchorWidth, iconHeight],
  });

  const marker = L.marker({
    lat,
    lng,
  }, {
    icon,
  });

  marker
    .addTo(map)
    .bindPopup(getOfferValues(offer));
});
