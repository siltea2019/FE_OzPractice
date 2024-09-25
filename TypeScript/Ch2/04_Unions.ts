/* 유니언 기초 
2가지 이상의 타입을 지정할 수 있다
함수 ⇒ 파라미터의 사용을 유연하게 사용할 수 있다 */
let userId: string | number;
userId = 1;
userId = "1";
userId = true;
userId = {};

function printUserId(id: string | number) {
  console.log(id);
}
printUserId("1");
printUserId(1);
printUserId({});

/* Type Narrowing 
유니언 타입의 구체적인 하위타입을 좁혀나가는 방식
⇒ “타입좁히기”라고도 표현함 */
function processValue(value: number | string) {
  // 숫자의 경우
  // ⇒ toUpperCase은 문자열 타입에만 적용되는 메서드인데
  // value의 타입이 숫자일 때 type error를 출력할 수 있다
  return value.toUpperCase();
}

// ⇒ 아래 예시는 함수가 Union타입일 경우 많이 사용되는 패턴
// 함수에 전달되는 파라미터의 값을 처리하기 전에 미리 타입체킹(checking)하여
// 타입에 알맞은 작업을 수행할 수 있게 된다
function processValue2(value: number | string) {
  // 문자열 경우
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  // 숫자의 경우
  return value.toString().toUpperCase();
}

/* 배열 : 2가지 이상의 타입으로 구성되어야 할 때
여러타입을 가진 배열을 사용하고 싶다면 any타입보다 Union타입의 사용을 권장*/

let mixedValues: (string | number)[] = [];
mixedValues.push("100");
mixedValues.push(100);
mixedValues.push([]);

/* 리터럴 : 타입 자체를 값과 타입으로 동시에 사용하는 개념
→ ex) 특정 문자열이나 숫자의 집합 */

let id: "1";
id = "1";
id = "2"; // error

/* 리터럴과 유니언 타입 : 함수에 전달 할수있는 값은 on | off (=string type의 리터럴)밖에 없다 */
const toggle = (option: "on" | "off") => {
  console.log(option);
};

toggle("on");
toggle("off");
toggle(true);
toggle(0);

// 리터럴의 경우 type aliases로 만들어 사용하는 것이 일반적
type Size = "xs" | "s" | "m" | "l" | "xl";
let tShirtSize: Size;
tShirtSize = "m";
tShirtSize = "xxl";

// 함수 파라미터로의 사용 :
// 리터럴 유니언을 사용하면 스위치문 타입가드를 이용한 패턴매칭이 용이해짐
function setSize(size: Size) {
  switch (size) {
    case "xs":
      // xs 처리
      break;
    case "s":
      // s 처리
      break;
    case "m":
      break;
    // m 처리
    case "l":
      // l 처리
      break;
    case "xl":
      // xl 처리
      break;
  }
}

/* Type Aliases와 유니언 : 여러개의 Type Aliases를 만들어서
Aliases를 사용하는 유니언타입으로 정의 내릴수 있음 */

type SuccessCode = 200 | 201 | 202;
type ErrorCode = 500 | 501 | 503;

// // 변수가 특정 값들중 하나만 가질수 있도록 제한 할 수 있고,
// error 코드나 환경설정과 같이 고정된 값들 중에서 선택해야 하는 경우에 유용한 패턴
let responseCode: SuccessCode | ErrorCode;

responseCode = 200;
responseCode = 503;
responseCode = 403;
