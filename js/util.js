const VALIDATION_CHECK_ERR_MSG = 'Только неотрицательные значения\nА также парамерт max не может быть меньше или равен параметру min';

const isValid = (min, max) => {
  return !(min < 0 || max <= min);
}

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (!isValid(min, max)) {
    return VALIDATION_CHECK_ERR_MSG;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloatingPointNumber = function (min, max, floatingPoint) {

  if (!isValid(min, max)) {
    return VALIDATION_CHECK_ERR_MSG;
  }

  return +(Math.random() * (max - min) + min).toFixed(floatingPoint);
}

const getRandomArrayIndex = (arr) => {
  return arr[getRandomInt(0, arr.length - 1)]
}

const getRandomArray = (arr) => {
  shuffle(arr);
  const slicedArray = arr.slice(0, getRandomInt(1, arr.length - 1));
  return slicedArray;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

const getKeyValue = (object, key) => {
  return object[key];
}

const integerNumberCheck = (number) => {
  if (number.isInteger) {
    return number;
  } else {
    return number.toFixed(5);
  }
}

const valueSrcCheck = (element, value) => {
  if (value === null) {
    element.classList.add('hidden');
  } else {
    element.src = value;
  }
}

const valueTextCheck = (element, value) => {
  if (value === null) {
    element.classList.add('hidden');
  } else {
    element.textContent = value;
  }
}

const arrayCheck = (element, arrayLength) => {
  if (arrayLength === 0) {
    element.classList.add('hidden');
  }
}

export {
  getRandomInt,
  getRandomFloatingPointNumber,
  getRandomArrayIndex,
  getRandomArray,
  integerNumberCheck,
  valueSrcCheck,
  valueTextCheck,
  arrayCheck,
  getKeyValue
};
