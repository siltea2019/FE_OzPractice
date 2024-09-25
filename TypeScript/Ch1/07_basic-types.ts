// 문자열 (string)
const a: string = "";
const b: string = "";
const c: string = ``; // 템플릿 리터럴

let myName: string = "SuMin";
let message: string = `Hello, ${myName}`;

// . - string type에 적용가능한 메서드들을 불러올수 있음
myName.toLocaleUpperCase;

// message는 문자열타입이므로 숫자를 할당 할 수 없음
message = 234;

// 숫자 (number)

let n: number = 1000;

// n는 숫자타입이므로 문자를 할당 할 수 없음
n = "min";

// toUpperCase는 문자열 메서드 이므로 사용할 수 없음
n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -14; // 음수
let distance: number = 3.4e-5; // 지수표현법

// 숫자이므로 연산 가능
let total: number = count * price;
let average: number = total / 2;

// 특수값 (타입스크립트)
let infinity: number = Infinity; // 무한대
let minusInfinity: number = -Infinity; // 음의 무한대
let iAmNotANumber: number = NaN; // NaN

// 불리언 (boolean) : 조건문, 로직연산, 플랫연수
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log("hello we are open!");
}

if (!isCompleted) {
  console.log("job not complete");
}

// && || ! (논리연산자)

let isAvailable: boolean = isOpen && !isCompleted;

// null 타입
let user: string | null = null; // 유니언타입 : 한가지 이상의 타입을 가지는 것

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login("Joey");
logout();

// any 타입

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
