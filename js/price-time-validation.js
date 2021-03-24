const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const type = document.querySelector('#type');
const price = document.querySelector('#price');
const priceForEachAccomodationType = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

type.addEventListener('change', () => {
  const accomodationType = document.querySelector('#type').value;
  const accomodationPrice = document.querySelector('#price');

  accomodationPrice.min = priceForEachAccomodationType[accomodationType];
  accomodationPrice.placeholder = priceForEachAccomodationType[accomodationType];
});

type.addEventListener('input', () => {
  const accomodationType = document.querySelector('#type').value;
  const accomodationPrice = document.querySelector('#price');

  if (accomodationPrice.value < priceForEachAccomodationType[accomodationType]) {
    accomodationPrice.setCustomValidity('Минимальная цена - ' + priceForEachAccomodationType[accomodationType]);
  } else {
    accomodationPrice.setCustomValidity('');
  }
  accomodationPrice.reportValidity();
});

price.addEventListener('input', () => {
  const accomodationType = document.querySelector('#type').value;
  const accomodationPrice = document.querySelector('#price');

  if (accomodationPrice.value < priceForEachAccomodationType[accomodationType]) {
    accomodationPrice.setCustomValidity('Минимальная цена - ' + priceForEachAccomodationType[accomodationType]);
  } else {
    accomodationPrice.setCustomValidity('');
  }
  accomodationPrice.reportValidity();
});

timeIn.addEventListener('change', () => {
  const timeInIndex = timeIn.selectedIndex;
  timeOut.selectedIndex = timeInIndex;
});

timeOut.addEventListener('change', () => {
  const timeOutIndex = timeOut.selectedIndex;
  timeIn.selectedIndex = timeOutIndex;
});
