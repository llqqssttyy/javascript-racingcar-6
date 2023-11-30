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
    if (isWhiteSpace(name)) throwError(ERROR.isWhitespace);

    if (isInvalidNumOfChars(name)) throwError(ERROR.invalidNumOfChars);
  }
}

export default Car;
