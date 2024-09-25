/* 기본 문법 : 선언된 타입과 순서에 맞게 할당 되어야 함*/

let myTuple: [string, number, boolean];

myTuple = ["Hello", 15, false];
myTuple = [15, "Hello", false];
myTuple = ["Hello", 15];
myTuple = ["Hello", , true];

// 사용 예시 1 : 함수가 여러가지 타입을 반환해야 할 때
function getUserInfo(): [number, string] {
  return [1, "Sam"];
}

// JS의 구조분해 할당
const [userid, username] = getUserInfo();

// 사용 예시 2 : type alias 사용
type Flavor = string;
type Price = number;

type IceCream = [Flavor, Price];

const strawberry: IceCream = ["strawberry", 300];

// 장점 : 항상 값이 일정한 위치에 일정한 타입으로 존재
strawberry[0];
strawberry[1];

// 사용 예시 3 : 배열의 내부 요소로 사용

type lat = number;
type lng = number;

type coord = [lat, lng];

let coords: coord[] = [];

coords.push([36, -234]);
coords.push([0, 0]);
coords.push([true, "1"]);

// 반복문의 사용

for (const [lat, lng] of coords) {
  console.log(lat, lng);
}
