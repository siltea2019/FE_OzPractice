class Country1 {
  code: number;
  name: string;
  capital: string;
  // 프로퍼티 값 할당하는 작업 -> constructor
  constructor(code: number, name: string, capital: string) {
    // this의 스코프 class 내부
    this.code = code;
    this.name = name;
    this.capital = capital;
  }
  displayInfo(): string {
    return `${this.name} (Code: ${this.code}). Capital: ${this.capital}`;
  }
}
// class 인스턴스를 만들고 인스턴스에 필드를 추가하고 값을 할당
let korean = new Country1(82, "South Korea", "Seoul");
console.log(korean);

// country 프로퍼티에 접근
korean.name = "South Korea";
korean.capital = "Seoul";

// class 인스턴스를 만듦과 동시에 프로퍼티에 값을 할당 방법 ⇒ 생성자 함수의 사용
// 생성자 : 클래스 인스턴스가 생성될 때 자동으로 호출되는 함수 ⇒ constructor

/* 클래스의 상속, 확장 */
class Continent {
  continentName: string;
  constructor(name: string) {
    this.continentName = name;
  }
  getContinentName() {
    return this.continentName;
  }
}

class Country2 extends Continent {
  private code: number;
  name: string;
  capital: string;
  constructor(
    // continent를 상속받기 때문에 3개의 파라미터가 아닌 4개의 파라미터의 타입을 정해줘야 한다
    continentName: string,
    code: number,
    name: string,
    capital: string
  ) {
    super(continentName);
    this.code = code;
    this.name = name;
    this.capital = capital;
    // constructor는 continent상속을 받아오기 때문에 super 메서드를 호출해와야 한다
    // super는 부모클래스의 컨스트럭터를 호출해온다(ES6)
  }
  getInfo() {
    return `${this.code}, ${this.name}, ${this.capital}, ${this.getContinentName}`;
  }
}

let american = new Country2(
  "North America",
  1,
  "United States of America",
  "Washington D.C."
);
console.log(american);
console.log(american.getInfo());

// 접근 제어자 : 클래스 멤버의 접근성을 제어
// 1. Public : 클래스의 멤버들 이나 메서드에 따로 명시 하지 않을경우 - 클래스의 어느곳에서나 접근할수 있다
// 아래는 인스턴스를 통해서 직접적으로 불가능
// 2. Private : 해당 클래스 내부에서만 접근가능 (하위 클래스에서 접근 불가) - ES6부터는 #(number sign)사용
// 3. Protected : 해당 클래스와 하위 클래스까지 접근 가능

// 2번예시
class Continent2 {
  private continentName: string;
  constructor(name: string) {
    this.continentName = name;
  }
  getContinentName() {
    return this.continentName;
  }
}

class Country3 extends Continent2 {
  private code: number;
  name: string;
  capital: string;
  constructor(
    continentName: string,
    code: number,
    name: string,
    capital: string
  ) {
    super(continentName);
    this.code = code;
    this.name = name;
    this.capital = capital;
  }
  getInfo() {
    // 하위 클래스인 Country3에서 부모클래스의 private continentName 프로퍼티에 접근 할수 없다    this.continentName;
    return `${this.name} (Code: ${this.code}). Capital: ${this.capital}`;
  }
}

let chinese = new Country3("Asia", 81, "Japan", "Tokyo");
chinese.code; // error : private이므로 해당 클래스 내부에서만 접근가능
chinese.continentName; // error : private이므로 클래스 내부에서만 접근 가능

// 3번 예시
class Continent3 {
  protected continentName: string;
  constructor(name: string) {
    this.continentName = name;
  }
  getContinentName() {
    return this.continentName;
  }
}

class Country4 extends Continent3 {
  protected code: number;
  name: string;
  capital: string;
  constructor(
    continentName: string,
    code: number,
    name: string,
    capital: string
  ) {
    super(continentName);
    this.code = code;
    this.name = name;
    this.capital = capital;
  }
  getInfo(): string {
    // protected continentName 하위 클래스인 Country4에서 접근이 가능하다
    this.continentName;
    return `${this.name} (Code: ${this.code}). Capital: ${this.capital}`;
  }
}

let japanese = new Country3("Asia", 81, "Japan", "Tokyo");
// 인스턴스를 통해 접근 불가
japanese.code; // error : protected이므로 해당 클래스 내부에서만 접근가능
japanese.continentName; // error : protected이므로 클래스 내부에서만 접근 가능

/* 인터페이스 활용방법 */
// 클래스가 따라야할 구체적인 구조를 정의
// 클래스를 설계할때 인터페이스를 통해 속성, 메서드의 시그니쳐 정의하고 모든 정의된 규칙을 충족시킨다

interface ContinentInterface {
  getContinentName(): string;
  // 프라이빗, 프로텍트는 인터페이스에 적용시키지 않는다
  // 인터페이스는 기본적으로 퍼블릭
}

interface CountryInterface {
  capital: string;
  getInfo(): string;
}

class Continent4 implements ContinentInterface {
  protected continentName: string;

  constructor(name: string) {
    this.continentName = name;
  }
  getContinentName(): string {
    return this.continentName;
  }
}

// 인터페이스의 적용은 extends 뒤에 implements 순으로 적용
class Country5 extends Continent4 implements CountryInterface {
  protected code: number;
  name: string;
  capital: string;
  constructor(
    continentName: string,
    code: number,
    name: string,
    capital: string
  ) {
    super(continentName);
    this.code = code;
    this.name = name;
    this.capital = capital;
  }
  getInfo(): string {
    this.continentName;
    return `${this.name} (Code: ${this.code}). Capital: ${this.capital}`;
  }
}

/* 추상 클래스 : 객체지향에서 중요한 개념 */
// (기본)정의된 클래스를 사용한다 ⇒ 클래스를 사용할 때 생성자 함수를 이용해 인스턴스를  생성 가능
// 추상 클래스는 인스턴스의 생성이 되지 않는다
// 그래서 클래스를 만들어서 상속을 받아서 인스턴스의 생성을 한다
abstract class AbstractCountry {
  name: string;
  capital: string;

  constructor(name: string, capital: string) {
    this.name = name;
    this.capital = capital;
  }
  setup(): void {
    console.log("setup complete");
  }
  // abstract 키워드를 사용하면 무조건 상속해서 사용(구현)해야 함
  // ← abstract displayInfo()의 내부에서 시그니쳐만 정의하고 MyCountry에서 상속받아서 사용하고 있는 것을 볼 수 있음
  // setup의 경우 키워드를 사용하지 않아 인스턴스에서 바로 불러서 사용가능
  abstract displayInfo(): void;
}

// 추상클래스는 인스턴스화 할수 없다 //
const myCountry = new AbstractCountry();

class MyCountry extends AbstractCountry {
  // abstract 키워드를 사용하면 무조건 상속해서 사용(구현)해야 함
  displayInfo() {
    console.log("display info called");
  }
}

const myCountry2 = new MyCountry("Germany", "Berlin");
// setup의 경우 키워드를 사용하지 않아 인스턴스에서 바로 불러서 사용가능
myCountry.setup;
myCountry.displayInfo;

// => 추상클래스를 사용하게 되면 extends키워드를사용해서 상속을 받아야 한다
// 추상클래스의 경우 인스턴스화 할수 없다
// abstract은 추상클래스 내부에서 시그니쳐만 정의하고, 상속받는 서브 클래스에서 구체적인 구현이 필요하다
