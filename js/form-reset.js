import {
  LAT_VALUE,
  LNG_VALUE,
  mainPinMarker,
  map
} from './map.js';

const tripInformationForm = document.querySelector('.ad-form');
const formResetButton = tripInformationForm.querySelector('.ad-form__reset');
const formAddress = tripInformationForm.querySelector('#address');
const tripFiltersForm = document.querySelector('.map__filters');

const formReset = () => {
  tripInformationForm.reset();
  tripFiltersForm.reset();
  formAddress.value = `${LAT_VALUE}, ${LNG_VALUE}`;
  mainPinMarker.setLatLng([LAT_VALUE, LNG_VALUE]);
  map.setView({
    lat: LAT_VALUE,
    lng: LNG_VALUE,
  }, 10);
}

formResetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  formReset();
});

export { formReset };
