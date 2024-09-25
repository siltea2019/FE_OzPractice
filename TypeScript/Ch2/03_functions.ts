/* Parameter */
function add(x: number, y: number): number {
  return x + y;
}

// 자동으로 변수의 타입이 결정됨
// 파라미터와 반환값을 타입을 지정함으로써 함수를 호출할 시점에 인수의 타입을 확인할수있고
// 함수의 반환값의 타입을 확인할수 있다(예측이 가능하다)
const result = add(2, 10);

/* Parameter2 */

function addToCart(name: string, price: number, quantity: number) {
  return `${name}, ${price}, ${quantity}`;
}

// 인수를 전달할 때 할 수 있는 실수를 예방
addToCart("apple", 100, 5);
addToCart("banana", 150);
addToCart("grape", 1110, 15, false);

/* Default Parameter : 파라미터의 기본값 설정
기본값을 설정함으로써 함수 사용시 필요한 파라미터의 수를 줄이고
선택적으로 해당 값을 생략 할 수 있다 */

function addToCart2(name: string, price: number, quantity: number = 1) {
  return `${name}, ${price}, ${quantity}`;
}

addToCart2("orange", 150);
addToCart2("pineapple", 50, 3);

/* optional parameter : 파라미터의 선택적 사용 
=> 옵셔널 파라미터가 전달 되지 않는 경우에 대해서 대비해야 한다
default와 다른점 -> default는 함수 내에 전달되는 파라미터의 갯수는 항상 같다
=> 기본값 파라미터를 전달해 주었기 떄문
*/

function addToCart3(name: string, price: number, quantity?: number) {
  return `${name}, ${price}, ${quantity}`;
}

addToCart3("berry", 30, 15);
// 3번째의 값의 경우 undefiede가 출력됨
addToCart3("blueberry", 130);
// 방법1.
// function addToCart3(name: string, price: number, quantity?: number) {
//   return `${name}, ${price}, ${quantity || 1}`
//  파라미터가 전달되면 전달 된값을 출력 || 아니면 1 출력
// }
// 방법2.
// function addToCart3(name: string, price: number, quantity?: number) {
//   if (quantity) {
//  파라미터가 전달 되었을때와 되지 않았을때의 로직 처리가 필요
//   }
//    return `${name}, ${price}, ${quantity}`
// }

/* Contextual Typing (문맥상 타이핑) : 메서드를 적용시키는 해당 배열에 있는 요소들의 타입을
TS가 자동으로 감지하여 요소들의 타입을 바탕으로 타입을 지정
=> 배열 메소드 사용시 콜백함수에 대한 파라미터의 타입을 배열의 요소타입을 바탕으로 
TS에서 자동으로 추론함 */

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const letters: string[] = ["a", "b", "c", "d", "e", "f"];

numbers.map((element) => {
  element.toString;
}),
  letters.forEach((letter) => {
    letter.concat;
  });

// 콜백함수를 사용할때는 자동 유추 시스템을 사용하는걸 추천
// 콜백함수의 인수마다 타입을 수동으로 지정할 수있지만.... => 추천하지 않음
// 지정할 시간에 로직개발 하세요

/* Return type annotation
함수의 리턴타입을 사용해서 함수가 예상치 못한 값을 반환했을때의 오류를 미리 방지
함수의 시그니쳐 만으로만 함수의 기능을 예측 */

function addTwoValues(x: number, y: number): string {
  return `${x} ${y}`;
}
function addTwoNumbers(x: number, y: number): number {
  return x + y;
}
function isTen(x: number, y: number): boolean {
  return x + y === 10;
}

/* void : 해당 함수가 반환값이 없다 */
function logMessage(message: string): void {
  console.log(message);
}

/* never : 해당 함수는 반환값이 존재하지 않는다
-> 무한정 동작 함수, 예외 처리 함수 
-> 자주 사용되지 않는 타입*/

function throwError(message: string): never {
  throw new Error(message);
}
