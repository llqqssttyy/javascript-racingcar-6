## 기능 구현 목록

- [ ] 자동차 이름 입력 받기(쉼표로 구분)

- [ ] 시도할 횟수 입력 받기

- [ ] 각 차수별 실행 결과 출력
  - [ ] 0에서 9 사이의 무작위 값 추출
  - [ ] 전진한 칸 수 출력
  
</br>

- [ ] 우승자 출력
  - [ ] 우승자가 여러 명일 경우 쉼표로 구분하여 출력


## 예외 처리
1. 자동차 이름을 입력할 때
- [ ] 6자 이상의 이름을 입력했을 때
- [ ] 자동차를 하나만 입력했을 때
- [ ] 공백 문자를 입력했을 때

2. 시도할 횟수 입력
- [ ] 숫자가 아닌 문자를 입력했을 때

<br/>

## 클래스 구조
> 데이터의 흐름을 깔끔하게 표현하기 위해 MVC 패턴을 적용.

### Model
- [X] 자동차 리스트를 저장하는 `cars` map 생성
- [X] `getCars()`
  > cars 변수의 getter
- [X] `addCars(name)`
  > 매개변수로 이름을 받아 key 값으로 map에 데이터 추가
- [ ] `increaseMoveCntByName(name)`
  > 매개변수로 이름을 받아 전진한 횟수 1 증가

### View
- [X] `printAdvanceResult(models)`
  > Controller로부터 데이터를 받아 결과를 출력하는 함수
- [X] `formatResult({ name, moveCnt })`
  > 포맷팅된 전진 결과를 반환하는 함수 (input: `{pobi, 3}` -> output: `'pobi : ---'`)
- [X] `generateAdvanceString(moveCnt)`
  > 전진 표기 문자열을 생성하는 함수 (input: `3` -> output: `'---'`)