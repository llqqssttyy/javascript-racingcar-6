import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/messages.js';

class InputView {
  async getCarNames() {
    const carNames = await Console.readLineAsync(INPUT.getCarNames);
    return carNames;
  }

  async getAttemptNum() {
    const attemptNum = await Console.readLineAsync(INPUT.getAttemptNum);
    return attemptNum;
  }
}

export default InputView;
