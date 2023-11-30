const MAX_NAME_LENGTH = 5;

// Car.js
export const isInvalidNumOfChars = (carName) => {
  return carName && carName.length > MAX_NAME_LENGTH;
};

export const isWhiteSpace = (str) => {
  return str === '' || str === ' ';
};

// GameModel.js
export const isInvalidCarNamesForm = (carNames) => {
  const regex = new RegExp(/^[a-zA-Z]{1,5}(?:,[a-zA-Z]{1,5})*$/);
  return !regex.test(carNames);
};

export const hasDuplicatedName = (carNames) => {
  const cars = new Set(carNames.split(','));
  return cars.size !== carNames.split(',').length;
};
