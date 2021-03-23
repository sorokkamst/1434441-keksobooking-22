const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const titleInput = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

roomNumber.addEventListener('change', () => {
  if (capacity.value > roomNumber.value && roomNumber.value !== '100' && capacity.value !== '0') {
    capacity.setCustomValidity('Количество гостей не может быть больше количества комнат');
  } else if (roomNumber.value === '100' && capacity.value !== '0') {
    capacity.setCustomValidity('Недопустимо размещение гостей при таком количестве комнат');
  } else if (roomNumber.value !== '100' && capacity.value === '0') {
    capacity.setCustomValidity('Выберете количество гостей, не превышающее количество комнат');
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
});

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity('Превышено на ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    titleInput.setCustomValidity('');
  }
});
