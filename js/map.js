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
  deactivatForm,
  activationForm
} from './form-state.js';

const LAT_VALUE = 35.68950;
const LNG_VALUE = 139.69171;
const ICON_WIDTH = 40;
const ICON_HEIGHT = 60;
const ICON_ANCHOR_WIDTH = ICON_WIDTH / 2;

const tripInformationFormAddress = document.querySelector('#address');
const pointsCheck = getRandomLocations;

deactivatForm();

const map = L.map('map-canvas')
  .on('load', () => {
    activationForm();
    tripInformationFormAddress.value = `${LAT_VALUE}, ${LNG_VALUE}`;
  })
  .setView({
    lat: LAT_VALUE,
    lng: LNG_VALUE,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const customMarker = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_ANCHOR_WIDTH, ICON_HEIGHT],
});

const mainPinMarker = L.marker({
  lat: LAT_VALUE,
  lng: LNG_VALUE,
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
    iconSize: [ICON_WIDTH, ICON_HEIGHT],
    iconAnchor: [ICON_ANCHOR_WIDTH, ICON_HEIGHT],
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
