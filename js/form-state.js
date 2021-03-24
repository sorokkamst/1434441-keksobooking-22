const tripInformationForm = document.querySelector('.ad-form');
const tripFiltersForm = document.querySelector('.map__filters');
const tripInformationFormChildren = tripInformationForm.querySelectorAll('fieldset');
const tripFiltersFormChildren = tripFiltersForm.querySelectorAll('.map__filter');

const deactivatForm = () => {
  tripInformationForm.classList.add('ad-form--disabled');
  tripFiltersForm.classList.add('map__filters--disabled');
  tripInformationFormChildren.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  tripFiltersFormChildren.forEach((fieldset) => {
    fieldset.disabled = true;
  });
}

const activationForm = () => {
  tripInformationForm.classList.remove('ad-form--disabled');
  tripFiltersForm.classList.remove('map__filters--disabled');
  tripInformationFormChildren.forEach((fieldset) => {
    fieldset.disabled = false;
  });
  tripFiltersFormChildren.forEach((fieldset) => {
    fieldset.disabled = false;
  });
}

export {
  deactivatForm,
  activationForm
};
