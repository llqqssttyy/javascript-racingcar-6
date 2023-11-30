import throwError from '../../utils/throwError.js';
import { ERROR } from '../../constants/messages.js';
import {
  isInvalidNumOfChars,
  isWhiteSpace,
} from '../validators/CarValidator.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { MOVING_NUMBER } from '../../constants/constants.js';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#validator(name);
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randNum = MissionUtils.Random.pickNumberInRange(0, 9);
    randNum >= MOVING_NUMBER && this.#position++;
  }

  get info() {
    return {
      name: this.#name,
      position: this.#position,
    };
  }

  #validator(name) {
    const { invalidChar, invalidNumOfChars } = ERROR;

    if (isWhiteSpace(name)) throwError(invalidChar);

    if (isInvalidNumOfChars(name)) throwError(invalidNumOfChars);
  }
}

export default Car;
