import {getRandomInt, getRandomFloatingPointNumber, getRandomArrayIndex, getRandomArray} from './util.js';

const TITLE = ['Информация о поездке', 'Описание предложения', 'Информация о месте проживания'];
const ACCOMODATION_TYPE = ['palace', 'flat', 'house', 'bungalow'];
const TIME = ['12:00', '13:00', '14:00'];
const ACCOMMODATION_FACILITIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const DESCRIPTION = ['Чисто, убрано, с крутым балконом', 'Большие номера с видом на море', 'Френдли к животным', 'Панорамные окна для фоточек']
const ACCOMODATION_VARIANTS = 10;

const getRandomAvatarNumber = (minNumber,maxNumber) => {
  const getRandomAvatarNumberCheck = getRandomInt(minNumber, maxNumber);
  if (getRandomAvatarNumberCheck < 10) {
    return ['0'+ getRandomAvatarNumberCheck].join();
  }
  return getRandomAvatarNumberCheck;
};

const generateOffer = () => {

  const locationX = getRandomFloatingPointNumber(35.65000, 35.70000, 5);
  const locationY = getRandomFloatingPointNumber(139.70000, 139.80000, 5);

  return {
    'author': {
      avatar: 'img/avatars/user' + getRandomAvatarNumber(1,20) + '.png',
    },
    'offer': {
      title: getRandomArrayIndex(TITLE),
      address: [locationX, locationY].toString(),
      price: getRandomInt(0,5000),
      type: getRandomArrayIndex(ACCOMODATION_TYPE),
      rooms: getRandomInt(1,100),
      guests: getRandomInt(1,100),
      checkin: getRandomArrayIndex(TIME),
      checkout: getRandomArrayIndex(TIME),
      features: getRandomArray(ACCOMMODATION_FACILITIES),
      description: getRandomArrayIndex(DESCRIPTION),
      photos: getRandomArray(PHOTOS),
    },
    'location': {
      x: locationX,
      y: locationY,
    },
  };
};

const getRandomLocations = new Array(ACCOMODATION_VARIANTS).fill(null).map(generateOffer);
// eslint-disable-next-line no-console
console.log(getRandomLocations);

export {getRandomLocations};
