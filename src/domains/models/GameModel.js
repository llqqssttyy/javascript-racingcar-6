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

  #curRound;

  constructor(carNames, attemptNum) {
    this.#validateCars(carNames);
    this.#carModels = carNames.split(',').map((name) => new Car(name));

    this.#validateAttemptNum(attemptNum);
    this.#attemptNum = Number(attemptNum);

    this.#curRound = 0;
  }

  playRound() {
    this.#carModels.forEach((car) => {
      car.move();
    });
    this.#curRound++;
  }

  get isGameOver() {
    return this.#attemptNum === this.#curRound;
  }

  get curStatus() {
    return this.#carModels.map((carModel) => carModel.status);
  }

  get winners() {
    const maxPosition = this.curStatus.reduce((maxPosition, { position }) => {
      return maxPosition <= position ? position : maxPosition;
    }, 0);

    const winners = this.curStatus.filter(
      ({ position }) => maxPosition !== 0 && position === maxPosition,
    );

    return winners.map(({ name }) => name);
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
