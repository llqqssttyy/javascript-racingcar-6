const MAX_NAME_LENGTH = 5;

export const isInvalidNumOfChars = (carName) => {
  return carName && carName.length > MAX_NAME_LENGTH;
};

export const isWhiteSpace = (str) => {
  console.log(str);
  return str === '' || str === ' ';
};
