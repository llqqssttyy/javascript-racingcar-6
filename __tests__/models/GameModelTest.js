import GameModel from '../../src/domains/models/GameModel';

describe('GameModel 모델 테스트', () => {
  test.each(['', ' '])('validator 테스트 - 공백 입력 검사', (input) => {
    expect(() => new GameModel(input)).toThrow('[ERROR]');
  });

  test.each(['pobi-game', 'pobi/game', '---'])(
    'validator 테스트 - 입력 형식 검사',
    (input) => {
      expect(() => new GameModel(input)).toThrow('[ERROR]');
    },
  );

  test('validator 테스트 - 중복 이름 입력 검사', () => {
    const INPUT = 'pobi,pobi';
    expect(() => new GameModel(INPUT)).toThrow('[ERROR]');
  });
});
