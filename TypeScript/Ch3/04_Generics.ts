/* 기본 문법 */

function genericFunction<T>(arg: T): T {
  // 전달 하는 타입에 맞춰서 반환값의 타입이 결정됨
  return arg;
}

interface GenericInterface<T> {}

class GenericClass<T> {}

// 빌트인 제네릭 타입
// Array<number> Array<string>
let numberArray: Array<number> = [1, 2, 3, 4, 5];
let stringArray: Array<string> = ["a", "b", "c", "d", "e"];

let div = document.querySelector<HTMLDivElement>("#myDiv1");
let divButton = document.querySelector("#myDivButton1");

divButton.click();
divButton?.click();
// divButton?.click();

// 제네릭 함수
function getFirstElement(arr: number[]) {
  if (!arr.length) {
    return undefined;
  }

  return arr[0];
}
function getFirstStringElement(arr: string[]) {
  if (!arr.length) {
    return undefined;
  }

  return arr[0];
}

const firstNumber = getFirstElement(numberArray);
const firstString = getFirstStringElement(stringArray);
// 위와 같이 타입지정을 제외하고 로직이 똑같은 함수가 있을때 코드 중복이 발생한다

// 제네릭을 통해 코드를 간결하게 만들 수 있다
// 하나의 함수를 통해 다양한 타입을 유연하게 처리 가능
function getSecondElement<T>(arr: T[]): T | undefined {
  if (!arr.length) {
    return undefined;
  }

  return arr[0];
}

const secondNumber = getSecondElement(numberArray);
const secondString = getSecondElement(stringArray);

// 제네릭 인터페이스
// 타입 매개변수를 사용 -> 유연하게 인터페이스를 구성
// object => dictionary => {key:value}(키:값 쌍) : value에 타입을 지정해줌
// key는 무조건 string 타입으로 정해짐, value의 타입을 유연하게 구성하고 싶을때
// => 제네릭 인터페이스 사용

interface strDict {
  [key: string]: string;
}

interface numDict {
  [key: string]: number;
}

interface Dict<T> {
  [key: string]: T;
}

// 인터페이스의 적용
let strObj: Dict<string> = {
  name: "Elliot",
};

let numObj: Dict<number> = {
  age: 30,
};

// 제네릭의 장점 : 하나 이상의 파라미터를 지원
// 여러타입을 가진 매개변수를 가진 제네릭 타입이나 함수를 정의 가능하다
// 다양한 타입, 키에 대한 유연한 처리를 가능하게 함

interface Entry<K, B> {
  key: K;
  value: B;
}

let entry: Entry<string, number> = {
  key: "age",
  value: 30,
};

let entry2: Entry<number, string[]> = {
  key: 30,
  value: ["Id", "color", "status"],
};
