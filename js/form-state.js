const tripInformationForm = document.querySelector('.ad-form');
const tripFiltersForm = document.querySelector('.map__filters');
const tripInformationFormChildren = tripInformationForm.querySelectorAll('fieldset');
const tripFiltersFormChildren = tripFiltersForm.querySelectorAll('.map__filter');

const manageStateTwoForms = (boolean) => {
  tripInformationFormChildren.forEach((fieldset) => {
    fieldset.disabled = boolean;
  });
  tripFiltersFormChildren.forEach((fieldset) => {
    fieldset.disabled = boolean;
  });
}

const manageStateMapFilter = (boolean) => {
  tripFiltersFormChildren.forEach((fieldset) => {
    fieldset.disabled = boolean;
  });
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
