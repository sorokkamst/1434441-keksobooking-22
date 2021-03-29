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
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const removeElement = (listener, element) => {
  listener.addEventListener('click', () => {
    main.removeChild(element);
  })
}

const showSentState = (template) => {
  template.cloneNode(true);
  main.appendChild(template);
  document.addEventListener('keydown', onPopupEscKeydown);
  removeElement(document, template);
};

const errorPopupClose = () => {
  removeElement(errorTemplateCloseButton, errorTemplate);
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
  showSentState(successTemplate);
};

const messageError = () => {
  showSentState(errorTemplate);
  errorPopupClose();
};
