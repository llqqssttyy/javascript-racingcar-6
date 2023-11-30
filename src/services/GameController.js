import InputView from '../views/InputView.js';

class GameController {
  #inputView;

  #outputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async start() {
    const carNames = await this.#inputView.getCarNames();
  }
}

export default GameController;
