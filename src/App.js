import GameService from './services/GameService.js';

class App {
  #gameService;

  constructor() {
    this.#gameService = new GameService();
  }

  async play() {
    await this.#gameService.init();

    this.#gameService.start();
  }
}

export default App;
