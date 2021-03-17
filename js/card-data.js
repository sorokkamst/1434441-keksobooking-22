import {
  getRandomLocations,
  ACCOMODATION_TYPE,
  ACCOMODATION_TYPE_RU
} from './data.js';

import {
  getSimilarArrayIndex,
  valueSrcCheck,
  valueTextCheck,
  arrayCheck
} from './util.js';

const template = document.querySelector('#card')
  .content
  .querySelector('.popup');

const locationsList = getRandomLocations;
const locationsListFragment = document.createDocumentFragment();

const getOfferValues = (data) => {

  const templateClone = template.cloneNode(true);
  const templatePhotoClone = templateClone.querySelector('.popup__photo').cloneNode();
  const templatePhotos = templateClone.querySelector('.popup__photos');
  const templatePhotoCloneLength = data.offer.photos.length;
  const templateFeaturesLength = data.offer.features.length;

  valueSrcCheck(templateClone.querySelector('.popup__avatar'), data.author.avatar);
  valueTextCheck(templateClone.querySelector('.popup__title'), data.offer.title);
  valueTextCheck(templateClone.querySelector('.popup__text--address'), data.offer.address);
  valueTextCheck(templateClone.querySelector('.popup__text--price'), data.offer.price + ' ₽/ночь');
  valueTextCheck(templateClone.querySelector('.popup__type'), getSimilarArrayIndex(ACCOMODATION_TYPE, ACCOMODATION_TYPE_RU, data.offer.type));
  valueTextCheck(templateClone.querySelector('.popup__text--capacity'), data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей');
  valueTextCheck(templateClone.querySelector('.popup__text--time'), data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей');
  valueTextCheck(templateClone.querySelector('.popup__description'), data.offer.description);
  arrayCheck(templateClone.querySelector('.popup__features'), templateFeaturesLength);
  arrayCheck(templateClone.querySelector('.popup__photos'), templatePhotoCloneLength);


  const getOfferFeatures = () => {
    for (let i = 0; i < templateFeaturesLength; i++) {
      const feature = data.offer.features[i];
      templateClone.querySelector('.popup__feature--' + feature).classList.remove('hidden');
    }
  }

  const getOfferPhotos = () => {
    for (let i = 0; i < templatePhotoCloneLength; i++) {
      templatePhotoClone.src = data.offer.photos[i];
      templatePhotos.appendChild(templatePhotoClone);
    }
    templatePhotos.removeChild(templatePhotos.children[0]);
  }

  getOfferFeatures();
  getOfferPhotos();

  return templateClone;
}

locationsListFragment.append(getOfferValues(locationsList[0]));
console.log(locationsListFragment);
