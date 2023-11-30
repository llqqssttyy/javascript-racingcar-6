import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../../src/domains/models/Car';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('유효성 검사 테스트', () => {
  test.each(['', ' '])('validator 테스트 - 공백 문자 입력 불가', (input) => {
    expect(() => new Car(input)).toThrow('[ERROR]');
  });

  test.each(['namesdf'])(
    'validator 테스트 - 5자 이하의 문자만 입력 가능',
    (input) => {
      expect(() => new Car(input)).toThrow('[ERROR]');
    },
  );
});

describe('move() 테스트', () => {
  test.each(['pobi'])(
    'validator 테스트 - 5자 이하의 문자만 입력 가능',
    (input) => {
      // given
      const ATTEMPT_NUMBER = 2;
      const MOVING_FORWARD = 4;
      const STOP = 3;
      const randoms = [MOVING_FORWARD, STOP];
      const RESULT = {
        name: 'pobi',
        position: 1,
      };

      mockRandoms([...randoms]);

      // when
      const car = new Car(input);
      for (let i = 0; i < ATTEMPT_NUMBER; i++) {
        car.move();
      }

      // then
      expect(car.status).toEqual(RESULT);
    },
  );
});
