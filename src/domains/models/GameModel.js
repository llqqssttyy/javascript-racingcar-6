import Car from './Car.js';

class GameModel {
  #carModels;

  #attemptNum;

  constructor(carNames) {
    this.#validateCars(carNames);
    this.#initCarModels(carNames.split(','));
  }

  #validateCars(carNames) {}

  #initCarModels(carNames) {
    this.carModels = carNames.map((name) => new Car(name));
  }
}

export default GameModel;
