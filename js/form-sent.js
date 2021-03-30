import {
  formReset
} from './form-reset.js'

import {
  isEscEvent
} from './util.js'

import {
  sendData
} from './fetch.js';

const main = document.querySelector('.main');
const addForm = document.querySelector('.ad-form');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const errorTemplateCloseButton = errorTemplate.querySelector('.error__button');

const closePopup = () => {
  document.querySelector('.sent-popup').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', closePopup);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const errorPopupClose = () => {
  errorTemplateCloseButton.addEventListener('click', closePopup);
}

addForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const addFormData = new FormData(evt.target);

  sendData(
    () => {
      formReset(), messageSuccess()
    },
    () => messageError(),
    addFormData,
  )
});

const messageSuccess = () => {
  successTemplate.cloneNode(true);
  main.appendChild(successTemplate);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', closePopup);
};

const messageError = () => {
  errorTemplate.cloneNode(true);
  main.appendChild(errorTemplate);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', closePopup);
  errorPopupClose();
};


