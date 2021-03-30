const MIN_TITLE_LENGTH = 30;
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const titleInput = document.querySelector('#title');

const validateNumberOfGuests = (field) => {
  field.addEventListener('change', () => {
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
  })
}

validateNumberOfGuests(roomNumber);
validateNumberOfGuests(capacity);

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.trim().length;
  titleInput.setCustomValidity(valueLength < MIN_TITLE_LENGTH ? 'Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.' : '');
  titleInput.reportValidity();
});

