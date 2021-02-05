'use strict';

// Вспомогательные функции и переменные
const VALIDATION_CHECK_ERR_MSG = 'Только неотрицательные значения\nА также парамерт max не может быть меньше или равен параметру min';

const IsValid = (min, max) => {
  return (min < 0 || max <= min) ? false : true;
}

// Задание 1
// Ссылка на источник https://developer.mozilla.org/

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (!IsValid(min, max)) {
    return VALIDATION_CHECK_ERR_MSG;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1,2);

// Задание 2

const getRandomFloatingPointNumber = function (min, max, floatingPoint) {

  if (!IsValid(min, max)) {
    return VALIDATION_CHECK_ERR_MSG;
  }

  return +(Math.random() * (max - min) + min).toFixed(floatingPoint);
}

getRandomFloatingPointNumber(1,2,1);
