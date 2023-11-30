import GameController from './services/GameController.js';

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController();
  }

  async play() {
    await this.#gameController.init();

    this.#gameController.start();
  }
}

export default App;
