export const INPUT = Object.freeze({
  getCarNames:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  getGameAttempts: '시도할 횟수는 몇 회인가요?\n',
});

export const ERROR = Object.freeze({
  invalidChar: '하나 이상의 알파벳을 입력해 주세요.',
  invalidNumOfChars: '유효하지 않은 글자 수입니다.',

  invalidCarNamesForm: '유효하지 않은 형식입니다.',
  duplicatedName: '이름은 중복으로 입력할 수 없습니다.',
});
