import {
  integerNumberCheck
} from './util.js';

import {
  getRandomLocations
} from './data.js';


const mapCanvas = document.querySelector('.map__canvas');
const tripInformationForm = document.querySelector('.ad-form');
const tripFiltersForm = document.querySelector('.map__filters');
const tripInformationFormAddress = tripInformationForm.querySelector('#address');

const points = [];
const pointsCheck = getRandomLocations;

const map = L.map('map-canvas')
  .on('load', () => {
    tripInformationFormAddress.value = '35.68950, 139.69171';
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 12);

// Добавил слои на карту
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Создал кастомный кругляш-маркер
const customMarker = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [40, 60],
  iconAnchor: [20, 60],
});

// Добавил кастомный кругляш-маркер на карту, сделал его передвигающимся
const mainPinMarker = L.marker({
  lat: 35.689,
  lng: 139.691,
}, {
  draggable: true,
  icon: customMarker,
});

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  const currentLat = evt.target.getLatLng().lat;
  const currentLng = evt.target.getLatLng().lng;
  tripInformationFormAddress.value = `${integerNumberCheck(currentLat)}, ${integerNumberCheck(currentLng)}`;
});

const getPointsLocations = (collection) => {
  for (let i = 0; i < collection.length; i++) {
    points.push(collection[i].location)
  }
}
getPointsLocations(pointsCheck);

points.forEach(({
  lat,
  lng,
}) => {
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 60],
    iconAnchor: [20, 60],
  });

  const marker = L.marker({
    lat,
    lng,
  }, {
    icon,
  });

  marker
    .addTo(map)
});

// Проверка на зарузку карты
if (!map._loaded) {
  mapCanvas.innerHTML = '';

  tripInformationForm.classList.add('ad-form--disabled');
  tripFiltersForm.classList.add('map__filters--disabled');

  for (let k = 0; k < tripInformationForm.children.length; k++) {
    tripInformationForm.children[k].disabled = true;
  }

  for (let j = 0; j < tripFiltersForm.children.length; j++) {
    tripFiltersForm.children[j].disabled = true;
  }
}
