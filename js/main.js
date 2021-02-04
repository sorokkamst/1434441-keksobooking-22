'use strict';
// Задание 1
// Ссылка на источник https://developer.mozilla.org/

const validationCheck = (min, max) => {
  if (min < 0 || max <= min) {
    return false;
  }
}

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (validationCheck(min, max) === false) {
    return ('Только неотрицательные значения\nА также парамерт max не может быть меньше или равен параметру min');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1,2);

// Задание 2

const getRandomFloatingPointNumber = function (min, max, floatingPoint) {

  if (validationCheck(min, max) === false) {
    return ('Только неотрицательные значения\nА также парамерт max не может быть меньше или равен параметру min');
  }

  return ((Math.random() * (max - min) + min).toFixed(floatingPoint)/1);
}

getRandomFloatingPointNumber(1,2,1);
