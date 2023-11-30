import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

class InputView {
  async getCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGES.getCarNames);
    return carNames;
  }
}

export default InputView;
