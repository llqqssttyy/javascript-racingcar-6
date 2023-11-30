import GameModel from '../domains/models/GameModel.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class GameController {
  #inputView;

  #outputView;

  #gameModel;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async init() {
    const carNames = await this.#inputView.getCarNames();
    const attemptNum = await this.#inputView.getAttemptNum();

    this.#gameModel = await new GameModel(carNames, attemptNum);
  }

  start() {
    this.#outputView.printStartGame();

    while (!this.#gameModel.isGameOver) {
      this.#gameModel.playRound();

      this.#outputView.printCurStatus(this.#gameModel.curStatus);
    }

    this.#outputView.printWinner(this.#gameModel.winners);
  }
}

export default GameController;
