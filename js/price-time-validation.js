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

const validatePrice = (field) => {
  field.addEventListener('input', () => {
    const type = document.querySelector('#type').value;
    const price = document.querySelector('#price');

    if (price.value < priceForEachAccomodationType[type]) {
      price.setCustomValidity('Минимальная цена - ' + priceForEachAccomodationType[type]);
    } else {
      price.setCustomValidity('');
    }
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

  accomodationPrice.min = priceForEachAccomodationType[accomodationType];
  accomodationPrice.placeholder = priceForEachAccomodationType[accomodationType];
});

validatePrice(type);
validatePrice(price);

validateTime(timeIn, timeOut);
validateTime(timeOut, timeIn);

