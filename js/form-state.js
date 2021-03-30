const tripInformationForm = document.querySelector('.ad-form');
const tripFiltersForm = document.querySelector('.map__filters');
const tripInformationFormChildren = tripInformationForm.querySelectorAll('fieldset');
const tripFiltersFormChildren = tripFiltersForm.querySelectorAll('.map__filter');

const manageStateMapFilter = (isDisabled) => {
  tripFiltersFormChildren.forEach((fieldset) => {
    fieldset.disabled = isDisabled;
  });
}

const manageStateTwoForms = (isDisabled) => {
  tripInformationFormChildren.forEach((fieldset) => {
    fieldset.disabled = isDisabled;
  });
  manageStateMapFilter(isDisabled);
}

const deactivatForm = () => {
  tripInformationForm.classList.add('ad-form--disabled');
  tripFiltersForm.classList.add('map__filters--disabled');
  manageStateTwoForms(true);
}

const activationForm = () => {
  tripInformationForm.classList.remove('ad-form--disabled');
  tripFiltersForm.classList.remove('map__filters--disabled');
  manageStateTwoForms(false);
}

const deactivateMapFilters = () => {
  tripFiltersForm.classList.add('map__filters--disabled');
  manageStateMapFilter(true);
}

const activateMapFilters = () => {
  tripFiltersForm.classList.remove('map__filters--disabled');
  manageStateMapFilter(false);
}

export {
  deactivatForm,
  activationForm,
  deactivateMapFilters,
  activateMapFilters
};
