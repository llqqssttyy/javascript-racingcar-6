import { Console } from '@woowacourse/mission-utils';
import { InputValidator } from '../models/InputValidator.js';
import { throwError } from '../utils/throwError.js';
import { MESSAGES } from '../constants/messages.js';

/**
 * 사용자에게 입력 받을 때 View
 */
class InputView {
  /**
   * 사용자에게 자동차 이름을 입력 받고, 입력에 대해 유효성 검사 시행
   * @returns {string} 자동차 이름이 담긴 배열
   */
  async getCarNames() {
    const carsNameInput = await Console.readLineAsync(MESSAGES.getCarName);

    const carNames = carsNameInput.split(',');
    this.validateCarNames(carNames);

    return carNames;
  }

  /**
   * 사용자에게 시도 횟수를 입력 받고 , 입력에 대해 유효성 검사 시행
   * @returns {number} 시도 횟수
   */
  async getAttemptNum() {
    const attemptNum = await Console.readLineAsync(MESSAGES.getAttemptNum);

    this.validateAttemptNum(attemptNum);

    return Number(attemptNum);
  }

  /**
   * 자동차 이름 입력에 대해 유효성 검사 실행
   * @param {string[]} carNames
   */
  validateCarNames(carNames) {
    carNames.forEach((carName) => {
      if (!InputValidator.isValidCarName(carName))
        throwError(`유효하지 않은 입력입니다: ${carName}`);
    });
  }

  /**
   * 시도 횟수 입력에 대해 유효성 검사 실행
   * @param {string} attemptNum
   */
  validateAttemptNum(attemptNum) {
    if (!InputValidator.isValidAttemptNum(attemptNum))
      throwError(`유효하지 않은 입력입니다: ${attemptNum}`);
  }
}

export default InputView;
