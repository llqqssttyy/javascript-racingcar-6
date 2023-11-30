import GameModel from '../domains/models/GameModel.js';
import InputView from '../views/InputView.js';

class GameController {
  #inputView;

  #outputView;

  #gameModel;

  constructor() {
    this.#inputView = new InputView();
  }

  async init() {
    const carNames = await this.#inputView.getCarNames();
    const attemptNum = await this.#inputView.getAttemptNum();

    this.#gameModel = new GameModel(carNames, attemptNum);
  }

  async start() {
    while (!this.#gameModel.isGameOver) {
      console.log('hey');
    }
  }
}

export default GameController;
