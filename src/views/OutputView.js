import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/messages.js';

class OutputView {
  printStartGame() {
    Console.print(OUTPUT.startGame);
  }

  printCurStatus(cars) {
    const { curStatus, newLine } = OUTPUT;

    Console.print(curStatus(cars));

    Console.print(newLine);
  }

  printWinner(winners) {
    Console.print(OUTPUT.winners(winners));
  }
}

export default OutputView;
