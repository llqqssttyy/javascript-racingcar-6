import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/messages';

class OutputView {
  printStartGame() {
    Console.print(OUTPUT.startGame);
  }

  printRoundResult(cars) {
    Console.print(OUTPUT.roundResult(cars));
  }
}

export default OutputView;
