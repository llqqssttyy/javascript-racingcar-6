import { ERROR } from '../../constants/messages.js';
import throwError from '../../utils/throwError.js';
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
    this.#initCarModels(carNames.split(','));
  }

  #validateCars(carNames) {
    const { invalidCarNamesForm, invalidChar, duplicatedName } = ERROR;

    if (isWhiteSpace(carNames)) throwError(invalidChar);

    if (isInvalidCarNamesForm(carNames)) throwError(invalidCarNamesForm);

    if (hasDuplicatedName(carNames)) throwError(duplicatedName);
  }

  #initCarModels(carNames) {
    this.#carModels = carNames.map((name) => new Car(name));
  }
}

export default GameModel;
