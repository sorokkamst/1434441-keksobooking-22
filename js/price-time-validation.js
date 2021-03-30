const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const type = document.querySelector('#type');
const price = document.querySelector('#price');
const PRICE_FOR_EACH_ACCOMODATION_TYPE = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const validatePrice = (field) => {
  field.addEventListener('input', () => {
    const type = document.querySelector('#type').value;
    const price = document.querySelector('#price');
    price.setCustomValidity(price.value < PRICE_FOR_EACH_ACCOMODATION_TYPE[type] ? 'Минимальная цена - ' + PRICE_FOR_EACH_ACCOMODATION_TYPE[type] : '');
    price.reportValidity();
  })
}

const validateTime = (firstField, secondField) => {
  firstField.addEventListener('change', () => {
    const timeInIndex = firstField.selectedIndex;
    secondField.selectedIndex = timeInIndex;
  })
}

type.addEventListener('change', () => {
  const accomodationType = document.querySelector('#type').value;
  const accomodationPrice = document.querySelector('#price');

  accomodationPrice.min = PRICE_FOR_EACH_ACCOMODATION_TYPE[accomodationType];
  accomodationPrice.placeholder = PRICE_FOR_EACH_ACCOMODATION_TYPE[accomodationType];
});

validatePrice(type);
validatePrice(price);

validateTime(timeIn, timeOut);
validateTime(timeOut, timeIn);
