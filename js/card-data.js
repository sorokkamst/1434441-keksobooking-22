import {
  getRandomLocations,
  ACCOMODATION_TYPE,
  ACCOMODATION_TYPE_RU
} from './data.js';

import {
  getSimilarArrayIndex
} from './util.js';

const mapCanvas = document.querySelector('.map__canvas');
const template = document.querySelector('#card')
  .content
  .querySelector('.popup');

const locationsList = getRandomLocations;
const randomLocationsListFragment = document.createDocumentFragment();

for (let i = 0; i < getRandomLocations.length; i++) {
  let templateClone = template.cloneNode(true);
  templateClone.querySelector('.popup__avatar').src = locationsList[i].author.avatar;
  templateClone.querySelector('.popup__title').textContent = locationsList[i].offer.title;
  templateClone.querySelector('.popup__text--address').textContent = locationsList[i].offer.address;
  templateClone.querySelector('.popup__text--price').textContent = locationsList[i].offer.price + ' ₽/ночь';
  templateClone.querySelector('.popup__type').textContent = getSimilarArrayIndex(ACCOMODATION_TYPE, ACCOMODATION_TYPE_RU, locationsList[i].offer.type);
  templateClone.querySelector('.popup__text--capacity').textContent = locationsList[i].offer.rooms + ' комнаты для ' + locationsList[i].offer.guests + ' гостей';
  templateClone.querySelector('.popup__text--time').textContent = 'Заезд после ' + locationsList[i].offer.checkin + ', выезд до ' + locationsList[i].offer.checkout;
  templateClone.querySelector('.popup__features').textContent = locationsList[i].offer.features.join(', ');
  templateClone.querySelector('.popup__description').textContent = locationsList[i].offer.description;
  randomLocationsListFragment.appendChild(templateClone);
}
console.log(randomLocationsListFragment);
// console.log(getRandomLocationsFragment);
mapCanvas.appendChild(randomLocationsListFragment.children[0]);
// const templateContent = template.querySelector('.popup');
// const mapCanvas = document.querySelector('.map__canvas');

// const TITLE_CARD = template.querySelector('.popup__title');
// const ADDRESS_CARD = template.querySelector('.popup__text--address');
// const PRICE_CARD = template.querySelector('.popup__text--price');
// const TYPE_CARD = template.querySelector('.popup__type');
// const CARACITY_CARD = template.querySelector('.popup__text--capacity');
// const TIME_CARD = template.querySelector('.popup__text--time');
// const FEATURES_CARD = template.querySelector('.popup__features');
// const DESCRIPTION_CARD = template.querySelector('.popup__description');
// const PHOTOS_CARD = template.querySelector('.popup__photos');
// const IMAGE_CARD = template.querySelector('.popup__photo');

// // console.log(IMAGE_CARD);

// const ACCOMODATION_TYPE = ['palace', 'flat', 'house', 'bungalow'];
// const ACCOMODATION_TYPE_RU = ['Дворец', 'Квартира', 'Дом', 'Бунгало'];
// const OFFER_TYPE =  getRandomLocations[0].offer.type;
// let OFFER_TYPE_RU = '';

// for (let i = 0; i < ACCOMODATION_TYPE.length; i++) {
//   if (OFFER_TYPE === ACCOMODATION_TYPE[i]) {
//     OFFER_TYPE_RU = ACCOMODATION_TYPE_RU[i];
//   }
// }

// // const FRAGMENT = document.createDocumentFragment();

// for (let i = 0; i < getRandomLocations.length; i++) {
//   let templateClone = templateContent.cloneNode(true);
//   TITLE_CARD.textContent = getRandomLocations[i].offer.title;
//   TITLE_CARD.textContent = getRandomLocations[i].offer.title;
//   ADDRESS_CARD.textContent = getRandomLocations[i].offer.address;
//   PRICE_CARD.textContent = getRandomLocations[i].offer.price + ' ₽/ночь';
//   TYPE_CARD.textContent = OFFER_TYPE_RU;
//   CARACITY_CARD.textContent = getRandomLocations[i].offer.rooms + ' комнаты для ' + getRandomLocations[i].offer.guests + ' гостей';
//   TIME_CARD.textContent = 'Заезд после ' + getRandomLocations[i].offer.checkin + ', выезд до ' +  getRandomLocations[i].offer.checkout;
//   FEATURES_CARD.textContent = getRandomLocations[i].offer.features.join(', ');
//   DESCRIPTION_CARD.textContent = getRandomLocations[i].offer.description;
//   PHOTOS_CARD.textContent = getRandomLocations[i].offer.photos;
//   // FRAGMENT.append(templateClone);
// }

// mapCanvas.append(templateContent);
// // console.log(templateContent);

// // console.log(FRAGMENT);
