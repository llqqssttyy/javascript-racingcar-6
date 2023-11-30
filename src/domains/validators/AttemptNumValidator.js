export const isInvalidNumber = (input) => {
  const regex = new RegExp(/^[1-9](?:[0-9])*$/);
  return !regex.test(input);
};
