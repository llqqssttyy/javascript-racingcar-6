import GameModel from '../domains/models/GameModel.js';
import InputView from '../views/InputView.js';

class GameController {
  #inputView;

  #outputView;

  #gameModel;

  constructor() {
    this.#inputView = new InputView();
  }

  async start() {}

  async init() {
    const carNames = await this.#inputView.getCarNames();
    const attemptNum = await this.#inputView.getAttempNum();

    this.#gameModel = new GameModel(carNames, attemptNum);
  }
}

export default GameController;
