interface User1 {
  id: number;
  name: string;
  isPremium: boolean;
  someMethod(): void;
}

const userA: User1 = {
  id: 10,
  name: "Bill",
  isPremium: false,
  someMethod() {
    console.log("some method called");
  },
};

// `Type Alias` vs `Interface`
// 두 기능의 목적은 다르지 않다, 문법의 차이, 지원되는 타입의 종류의 차이가 있음
// 타입 Alias => type User = {} : 객체 포함, 리터럴, 원시값등을 여러가지 타입을 가질 수 있다
// 인터페이스 => interface User {} : 객체 타입(형태)으로 사용해야 한다 => 확장 문법이 다르다

// readonly & optional property
interface User2 {
  readonly id: number;
  name: string;
  isPremium?: boolean;
}

const testUser: User2 = {
  id: 100,
  name: "John",
};

testUser.id = 200;

// 메서드/함수 타입

interface User3 {
  readonly id: number;
  name: string;
  isPremium: boolean;
  greet(): void;
}

const testUser2: User3 = {
  id: 200,
  name: "Nathan",
  isPremium: false,
  greet() {
    console.log(`Hello Nathan`);
    // 매개변수를 가지고 있지도 않고 void로 인해 반환값을 가지지 않는다
  },
};

testUser2.greet(); // void로 메서드로 어떤 작업을 해도 반환값이 없으면 문제없이 실행됨

// 발생가능한 오류 1 - void는 다른 타입과 호환되지 않는다
interface User4 {
  readonly id: number;
  name: string;
  isPremium: boolean;
  greet(): string;
}

const testUser3: User4 = {
  id: 300,
  name: "Sumin",
  isPremium: true,
  greet() {
    console.log(`Hello Nathan`);
  },
};

const testUser4: User4 = {
  id: 300,
  name: "Sumin",
  isPremium: true,
  greet() {
    return "Hello Nathan";
  },
};

// 발생가능한 오류 2 - 파라미터의 전달
// 시그니쳐가 구현하는 구현체에도 그대로 적용이 된다
// 또한 메서드의 반환타입에 맞춰서
// 구현시 타입에 알맞은 값을 반환해줘야 한다
interface User5 {
  readonly id: number;
  name: string;
  isPremium: boolean;
  greet(message: string): string;
}

const testUser5: User5 = {
  id: 300,
  name: "Sumin",
  isPremium: true,
  greet(message: string) {
    return `${message}, ${this.name}`;
  },
};

testUser5.greet();
testUser5.greet(`Hello`);

// 확장 및 조합
// 단일 상속
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

interface Student extends Person {
  studentId: number;
}

const personA: Person = {
  name: "Eli",
  age: 30,
};

const studentA: Student = {
  name: "John",
  age: 18,
  studentId: 1234354,
};

// 다중확장
interface Job extends Person, Employee {
  corporation: string;
}

const peopleA: Job = {
  name: "Jin",
  age: 30,
  corporation: "bank",
  employeeId: 2409808698,
};
