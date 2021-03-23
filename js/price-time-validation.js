const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const type = document.querySelector('#type');
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

timeIn.addEventListener('change', () => {
  const timeInIndex = timeIn.selectedIndex;
  timeOut.selectedIndex = timeInIndex;
});

timeOut.addEventListener('change', () => {
  const timeOutIndex = timeOut.selectedIndex;
  timeIn.selectedIndex = timeOutIndex;
});
