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

for (let i = 0; i < locationsList.length; i++) {
  let templateClone = template.cloneNode(true);
  let templatePhotos = templateClone.querySelector('.popup__photos');

  let templatePhotoCloneLength = locationsList[i].offer.photos.length; // Количество фото для вставки
  let templateFeaturesLength = locationsList[i].offer.features.length; // Количество удобств для вставки

  let templateFeaturesCloneChildren = templateClone.querySelector('.popup__features').children; // Коллекция элементов в списке удобств
  let templateFeaturesCloneLength = templateClone.querySelector('.popup__features').children.length; // Количество элементов коллекции удобств

  if (locationsList[i].author.avatar === null) {
    templateClone.querySelector('.popup__avatar').classList.add('hidden');
  } else {
    templateClone.querySelector('.popup__avatar').src = locationsList[i].author.avatar;
  }

  if (locationsList[i].offer.title === null) {
    templateClone.querySelector('.popup__title').classList.add('hidden');
  } else {
    templateClone.querySelector('.popup__title').textContent = locationsList[i].offer.title;
  }

  if (locationsList[i].offer.address === null) {
    templateClone.querySelector('.popup__text--address').classList.add('hidden');
  } else {
    templateClone.querySelector('.popup__text--address').textContent = locationsList[i].offer.address;
  }

  if (locationsList[i].offer.price === null) {
    templateClone.querySelector('.popup__text--price').classList.add('hidden');
  } else {
    templateClone.querySelector('.popup__text--price').textContent = locationsList[i].offer.price + ' ₽/ночь';
  }

  if (locationsList[i].offer.type === null) {
    templateClone.querySelector('.popup__type').classList.add('hidden');
  } else {
    templateClone.querySelector('.popup__type').textContent = getSimilarArrayIndex(ACCOMODATION_TYPE, ACCOMODATION_TYPE_RU, locationsList[i].offer.type);
  }

  if (locationsList[i].offer.rooms === null || locationsList[i].offer.guests === null) {
    templateClone.querySelector('.popup__text--capacity').classList.add('hidden');
  } else {
    templateClone.querySelector('.popup__text--capacity').textContent = locationsList[i].offer.rooms + ' комнаты для ' + locationsList[i].offer.guests + ' гостей';
  }

  if (locationsList[i].offer.checkin === null || locationsList[i].offer.checkout === null) {
    templateClone.querySelector('.popup__text--time').classList.add('hidden');
  } else {
    templateClone.querySelector('.popup__text--time').textContent = 'Заезд после ' + locationsList[i].offer.checkin + ', выезд до ' + locationsList[i].offer.checkout;
  }

  if (locationsList[i].offer.description === null) {
    templateClone.querySelector('.popup__description').classList.add('hidden');
  } else {
    templateClone.querySelector('.popup__description').textContent = locationsList[i].offer.description;
  }

  if (templateFeaturesLength === null) {
    templateClone.querySelector('.popup__features').classList.add('hidden');
  } else {
    for (let j = 0; j < templateFeaturesCloneLength; j++) {
      for (let t = 0; t < templateFeaturesLength; t++) {
        let feature = locationsList[i].offer.features[t];
        if (templateFeaturesCloneChildren[j].classList.contains('popup__feature--' + feature)) {
          templateFeaturesCloneChildren[j].classList.remove('hidden');
        }
      }
    }
  }

  if (templatePhotoCloneLength === null) {
    templateClone.querySelector('.popup__photos').classList.add('hidden');
  } else {
    for (let k = 0; k < templatePhotoCloneLength; k++) {
      let templatePhotoClone = templateClone.querySelector('.popup__photo').cloneNode();
      templatePhotoClone.src = locationsList[i].offer.photos[k];
      templatePhotos.appendChild(templatePhotoClone);
    }
  }

  templatePhotos.removeChild(templatePhotos.children[0]);

  randomLocationsListFragment.appendChild(templateClone);
}


mapCanvas.appendChild(randomLocationsListFragment.children[0]);
