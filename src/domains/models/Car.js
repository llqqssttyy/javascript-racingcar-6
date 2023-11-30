import throwError from '../../utils/throwError.js';
import { ERROR } from '../../constants/messages.js';
import {
  isInvalidNumOfChars,
  isWhiteSpace,
} from '../validators/CarValidator.js';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#validator(name);
    this.#name = name;
    this.#position = 0;
  }

  #validator(name) {
    const { invalidChar, invalidNumOfChars } = ERROR;

    if (isWhiteSpace(name)) throwError(invalidChar);

    if (isInvalidNumOfChars(name)) throwError(invalidNumOfChars);
  }
}

export default Car;
