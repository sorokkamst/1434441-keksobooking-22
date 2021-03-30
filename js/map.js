/* global L:readonly */
/* global _:readonly */
import {
  integerNumberCheck
} from './util.js';

import {
  getOfferValues
} from './card-data.js';

import {
  deactivatForm,
  activationForm,
  deactivateMapFilters,
  activateMapFilters
} from './form-state.js';

import {
  getData
} from './fetch.js';

import {
  filterOffers,
  formPrint
} from './map-filter.js';

const LAT_VALUE = 35.68950;
const LNG_VALUE = 139.69171;
const ICON_WIDTH = 40;
const ICON_HEIGHT = 60;
const ICON_ANCHOR_WIDTH = ICON_WIDTH / 2;
const MAP_ZOOM = 10;
const SIMILAR_OFFERS_COUNT = 10;
const RERENDER_DELAY = 500;

const tripInformationFormAddress = document.querySelector('#address');
const dataLoadErorr = document.querySelector('.map__error');

deactivatForm();

const map = L.map('map-canvas')
  .on('load', () => {
    activationForm();
    tripInformationFormAddress.value = `${LAT_VALUE}, ${LNG_VALUE}`;
  })
  .setView({
    lat: LAT_VALUE,
    lng: LNG_VALUE,
  }, MAP_ZOOM);

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
  const {
    lat,
    lng,
  } = evt.target.getLatLng();
  tripInformationFormAddress.value = `${integerNumberCheck(lat)}, ${integerNumberCheck(lng)}`;
});

const markers = L.layerGroup().addTo(map);

const drawOffers = (offers) => {
  markers.clearLayers();
  offers.forEach((offer) => {
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
      .addTo(markers)
      .bindPopup(getOfferValues(offer));
  })
  activateMapFilters();
};

const getDataError = () => {
  dataLoadErorr.classList.remove('hidden');
  deactivateMapFilters();
}

const drawFiltersOffers = (offers) => {
  drawOffers(filterOffers(offers).slice(0, SIMILAR_OFFERS_COUNT));
}

getData(
  (offers) => {
    drawFiltersOffers(offers);
    formPrint(_.debounce(() => drawFiltersOffers(offers), RERENDER_DELAY));
  },
  () => getDataError(),
);


export {
  LAT_VALUE,
  LNG_VALUE,
  mainPinMarker,
  map
};
