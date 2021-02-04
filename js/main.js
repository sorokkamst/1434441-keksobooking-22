"use strict";
// Задание 1
// Ссылка на источник https://developer.mozilla.org/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    alert('Только неотрицательные значения');
    return false;
  }

  if (max <= min) {
    alert('Парамерт max не может быть меньше или равен параметру min');
    return false;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание 2

function getRandomFloatingPointNumber(min, max, floatingPoint) {

  if (min < 0) {
    alert('Только неотрицательные значения');
    return false;
  }

  if (max <= min) {
    alert('Парамерт max не может быть меньше или равен параметру min');
    return false;
  }

  return ((Math.random() * (max - min) + min).toFixed(floatingPoint));
}
