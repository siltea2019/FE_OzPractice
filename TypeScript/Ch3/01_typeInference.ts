/* 변수 */
let myNumber = 5; // number 타입으로 추론
let myString = "Hello"; // string 타입으로 추론
let myBool = true; // boolean 타입으로 추론

myNumber = 2024;
// 다른 타입으로 변경 불가능
myNumber = "Five";

/* 함수 반환 타입 */
function add(x: number, y: number) {
  return x + y;
}

// 반환타입을 명시하지 않았지만 인수의 타입을 숫자로 지정했고
// 결과를 덧셈연산을 하기 때문에 컴파일러가 num1의 타입을 number로 추론함
const num1 = add(10, 5);

function add2(x: number, y: number) {
  return `${x} ${y}`;
}
const num2 = add2(10, 5);

/* 배열 & 객체 */

let nums = [1, 2, 3, 4];

let userC = { name: "Eli", age: 30 };

nums.push("HI");
userC.age = "30";

// 배열 & 객체 내부의 값들이 다른 타입으로 지정되어있을때
let mixedValuesB = [1, 2, 3, "red", "green", "blue"];
