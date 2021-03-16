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
const locationsListFragment = document.createDocumentFragment();

const getOfferValues = (data) => {

  const templateClone = template.cloneNode(true);
  const templatePhotoClone = templateClone.querySelector('.popup__photo').cloneNode();
  const templatePhotos = templateClone.querySelector('.popup__photos');
  const templatePhotoCloneLength = data.offer.photos.length;
  const templateFeaturesLength = data.offer.features.length;

  templateClone.querySelector('.popup__avatar').src = data.author.avatar;
  templateClone.querySelector('.popup__title').textContent = data.offer.title;
  templateClone.querySelector('.popup__text--address').textContent = data.offer.address;
  templateClone.querySelector('.popup__text--price').textContent = data.offer.price + ' ₽/ночь';
  templateClone.querySelector('.popup__type').textContent = getSimilarArrayIndex(ACCOMODATION_TYPE, ACCOMODATION_TYPE_RU, data.offer.type);
  templateClone.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
  templateClone.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
  templateClone.querySelector('.popup__description').textContent = data.offer.description;

  const getOfferFeatures = () => {
    for (let k = 0; k < templateFeaturesLength; k++) {
      const feature = data.offer.features[k];
      templateClone.querySelector('.popup__feature--' + feature).classList.remove('hidden');
    }
  }

  const getOfferPhotos = () => {
    for (let j = 0; j < templatePhotoCloneLength; j++) {
      templatePhotoClone.src = data.offer.photos[j];
      templatePhotos.appendChild(templatePhotoClone);
    }
    templatePhotos.removeChild(templatePhotos.children[0]);
  }

  getOfferFeatures();
  getOfferPhotos();

  return templateClone;
}

locationsListFragment.append(getOfferValues(locationsList[0]));
mapCanvas.append(locationsListFragment);
