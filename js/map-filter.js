const mapForm = document.querySelector('.map__filters');
const housingType = mapForm.querySelector('[name="housing-type"]');
const housingPrice = mapForm.querySelector('[name="housing-price"]');
const housingRooms = mapForm.querySelector('[name="housing-rooms"]');
const housingGuests = mapForm.querySelector('[name="housing-guests"]');
const wifi = mapForm.querySelector('#filter-wifi');
const dishwasher = mapForm.querySelector('#filter-dishwasher');
const parking = mapForm.querySelector('#filter-parking');
const washer = mapForm.querySelector('#filter-washer');
const elevator = mapForm.querySelector('#filter-elevator');
const conditioner = mapForm.querySelector('#filter-conditioner');

const NO_VALUE = 'any';

const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const isTypeAvailable = (offer) => {
  return housingType.value === NO_VALUE || housingType.value === offer.type;
}

const isPriceAvailable = (offer) => {
  switch (housingPrice.value) {
    case 'low':
      return offer.price < MIN_PRICE;
    case 'middle':
      return MIN_PRICE < offer.price < MAX_PRICE;
    case 'high':
      return offer.price > MAX_PRICE;
    default:
      return offer.price >= 0;
  }
}

function isRoomsAvailable(offer) {
  return housingRooms.value === NO_VALUE || +housingRooms.value === offer.rooms;
}

const isGuestsAvailable = (offer) => {
  return housingGuests.value === NO_VALUE || +housingGuests.value === offer.guests;
}

const isWifiAvailable = (offer) => {
  return wifi.checked === false || offer.features.includes('wifi');
}

const isDishwasherAvailable = (offer) => {
  return dishwasher.checked === false || offer.features.includes('dishwasher');
}

const isParkingAvailable = (offer) => {
  return parking.checked === false || offer.features.includes('parking');
}

const isWasherAvailable = (offer) => {
  return washer.checked === false || offer.features.includes('washer');
}

const isElevatorAvailable = (offer) => {
  return elevator.checked === false || offer.features.includes('elevator');
}

const isConditionerAvailable = (offer) => {
  return conditioner.checked === false || offer.features.includes('conditioner');
}

const filterOffers = (offers) => {
  return offers.filter(({
    offer
  }) => isTypeAvailable(offer) && isPriceAvailable(offer) && isRoomsAvailable(offer) && isGuestsAvailable(offer) && isWifiAvailable(offer) && isDishwasherAvailable(offer) && isParkingAvailable(offer) && isWasherAvailable(offer) && isElevatorAvailable(offer) && isConditionerAvailable(offer));
}

const formPrint = (callback) => {
  mapForm.addEventListener('change', () => {
    callback();
  })
}

export {
  filterOffers,
  formPrint
};
