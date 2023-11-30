import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/messages.js';

class OutputView {
  printStartGame() {
    Console.print(OUTPUT.startGame);
  }

  printCurStatus(cars) {
    Console.print(OUTPUT.curStatus(cars));

    Console.print(OUTPUT.newLine);
  }
}

export default OutputView;
