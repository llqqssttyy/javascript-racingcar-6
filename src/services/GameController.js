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

    this.#gameModel = await new GameModel(carNames, attemptNum);
  }

  start() {
    this.#outputView;

    while (!this.#gameModel.isGameOver) {
      this.#gameModel.playRound();
    }
  }
}

export default GameController;
