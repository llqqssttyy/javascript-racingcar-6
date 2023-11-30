import { ERROR } from '../../constants/messages.js';
import throwError from '../../utils/throwError.js';
import { isInvalidNumber } from '../validators/AttemptNumValidator.js';
import {
  hasDuplicatedName,
  isInvalidCarNamesForm,
  isWhiteSpace,
} from '../validators/CarValidator.js';
import Car from './Car.js';

class GameModel {
  #carModels;

  #attemptNum;

  constructor(carNames, attemptNum) {
    this.#validateCars(carNames);
    this.#carModels = carNames.split(',').map((name) => new Car(name));

    this.#validateAttemptNum(attemptNum);
    this.attemptNum = Number(attemptNum);
  }

  #validateCars(carNames) {
    const { invalidCarNamesForm, invalidChar, duplicatedName } = ERROR;

    if (isWhiteSpace(carNames)) throwError(invalidChar);

    if (isInvalidCarNamesForm(carNames)) throwError(invalidCarNamesForm);

    if (hasDuplicatedName(carNames)) throwError(duplicatedName);
  }

  #validateAttemptNum(attempNum) {
    const { invalidChar, invalidNumber } = ERROR;

    if (isWhiteSpace(attempNum)) throwError(invalidChar);

    if (isInvalidNumber(attempNum)) throwError(invalidNumber);
  }
}

export default GameModel;
