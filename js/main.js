'use strict';
// Вспомогательные функции и переменные
const VALIDATION_CHECK_ERR_MSG = 'Только неотрицательные значения\nА также парамерт max не может быть меньше или равен параметру min';

const isValid = (min, max) => {
  return !(min < 0 || max <= min);
}

// Задание 1
// Ссылка на источник https://developer.mozilla.org/

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (!isValid(min, max)) {
    return VALIDATION_CHECK_ERR_MSG;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1,2);

// Задание 2

const getRandomFloatingPointNumber = function (min, max, floatingPoint) {

  if (!isValid(min, max)) {
    return VALIDATION_CHECK_ERR_MSG;
  }

  return +(Math.random() * (max - min) + min).toFixed(floatingPoint);
}

getRandomFloatingPointNumber(1,2,1);

// Module3-task1

// Input data
const ACCOMODATION_TYPE = ['palace', 'flat', 'house', 'bungalow'];
const ARRIVAL_TIME = ['12:00', '13:00', '14:00'];
const DEPARTURE_TIME = ['12:00', '13:00', '14:00'];
const ACCOMMODATION_FACILITIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
const ACCOMODATION_VARIANTS = 10;
// Secondary variables

// let result = [];
//
// const RANDOM_MASSIV = (ACCOMMODATION_FACILITIES, ACCOMMODATION_FACILITIES[getRandomInt(0, ACCOMMODATION_FACILITIES.length)]) = > {
//   for (let i = 0; i < arr.length; i++ ) {
//     let randomValue = ACCOMMODATION_FACILITIES[getRandomInt(0, ACCOMMODATION_FACILITIES.length - 1)];
//     if (checkAvailability(arr, value)) ? true : result.push(randomValue);
//   }
// }
//   console.log(result);

const author = () => {
  return {
    avatar: 'img/avatars/user' + [0, getRandomInt(1,8)].join('') + '.png'
  };
};

const offer = () => {
  return {
    title: 'Информация о поездке',
    address: [getRandomFloatingPointNumber(1,200,1),getRandomFloatingPointNumber(1,200,1)],
    price: getRandomInt(0,5000),
    type: ACCOMODATION_TYPE[getRandomInt(0, ACCOMODATION_TYPE.length - 1)],
    rooms: getRandomInt(1,1000),
    guests: getRandomInt(1,1000),
    checkin: ARRIVAL_TIME[getRandomInt(0, ARRIVAL_TIME.length - 1)],
    checkout: DEPARTURE_TIME[getRandomInt(0, DEPARTURE_TIME.length - 1)],
    // features:
    description: 'Чисто, убрано, с крутым балконом'
    // photos:
  };
};

const location = () => {
  return {
    x: getRandomFloatingPointNumber(35.65000, 35.70000, 5),
    y: getRandomFloatingPointNumber(139.70000, 139.80000, 5)
  };
};

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}


const randomLocation = () => Object.assign({}, author(), offer(), location());

const tenRandomLocations = new Array(ACCOMODATION_VARIANTS).fill(null).map(() => randomLocation());
console.log(tenRandomLocations);
