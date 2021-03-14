document.querySelector('#type').onchange = function () {
  let accomodationType = document.querySelector('#type').value;
  let accomodationPrice = document.querySelector('#price');
  if (accomodationType === 'bungalow') {
    accomodationPrice.min = 0;
    accomodationPrice.placeholder = '0';
  } else if (accomodationType === 'flat') {
    accomodationPrice.min = 1000;
    accomodationPrice.placeholder = '1000';
  } else if (accomodationType === 'house') {
    accomodationPrice.min = 5000;
    accomodationPrice.placeholder = '5000';
  } else if (accomodationType === 'palace') {
    accomodationPrice.placeholder = '10000';
    accomodationPrice.min = 10000;
  }
};


document.querySelector('#timein').onchange = function () {
  let timeInIndex = document.querySelector('#timein').selectedIndex;
  document.querySelector('#timeout').selectedIndex = timeInIndex;
};

document.querySelector('#timeout').onchange = function () {
  let timeOutIndex = document.querySelector('#timeout').selectedIndex;
  document.querySelector('#timein').selectedIndex = timeOutIndex;
};
