import GameModel from '../../src/domains/models/GameModel';

describe('GameModel 모델 자동차 이름 입력 테스트', () => {
  const ATTEMPT_NUM = '1';
  test.each(['', ' '])('validator 테스트 - 공백 입력 검사', (input) => {
    expect(() => new GameModel(input, ATTEMPT_NUM)).toThrow('[ERROR]');
  });

  test.each(['pobi-game', 'pobi/game', '---'])(
    'validator 테스트 - 입력 형식 검사',
    (input) => {
      expect(() => new GameModel(input, ATTEMPT_NUM)).toThrow('[ERROR]');
    },
  );

  test('validator 테스트 - 중복 이름 입력 검사', () => {
    const INPUT = 'pobi,pobi';
    expect(() => new GameModel(INPUT, ATTEMPT_NUM)).toThrow('[ERROR]');
  });
});

describe('GameModel 모델 시도 횟수 입력 테스트', () => {
  const CAR_NAMES = 'pobi';

  test.each(['', ' '])('validator 테스트 - 공백 입력 검사', (input) => {
    expect(() => new GameModel(CAR_NAMES, input)).toThrow('[ERROR]');
  });

  test.each(['0', '-1'])('validator 테스트 - 숫자 형식 검사 에러', (input) => {
    expect(() => new GameModel(CAR_NAMES, input)).toThrow('[ERROR]');
  });

  test.each(['1', '10'])('validator 테스트 - 숫자 형식 검사 통과', (input) => {
    expect(() => new GameModel(CAR_NAMES, input)).not.toThrow('[ERROR]');
  });
});
