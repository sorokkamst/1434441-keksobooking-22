const priceForEachAccomodationType = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

document.querySelector('#type').addEventListener('change', () => {
  const accomodationType = document.querySelector('#type').value;
  const accomodationPrice = document.querySelector('#price');
  accomodationPrice.min = priceForEachAccomodationType[accomodationType];
  accomodationPrice.placeholder = priceForEachAccomodationType[accomodationType];
});


document.querySelector('#timein').onchange = function () {
  let timeInIndex = document.querySelector('#timein').selectedIndex;
  document.querySelector('#timeout').selectedIndex = timeInIndex;
};

document.querySelector('#timeout').onchange = function () {
  let timeOutIndex = document.querySelector('#timeout').selectedIndex;
  document.querySelector('#timein').selectedIndex = timeOutIndex;
};
