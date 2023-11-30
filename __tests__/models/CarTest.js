import Car from '../../src/domains/models/Car';

describe('Car 모델 테스트', () => {
  test.each(['', ' ', 'namesdf'])(
    'validator 테스트 - 5자 이하의 문자만 입력 가능',
    (input) => {
      expect(() => new Car(input)).toThrow('[ERROR]');
    },
  );
});
