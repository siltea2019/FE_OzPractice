// 기본 객체 타입

// {
//   property_name: property_type
// }

/* 타입명시 */
let monitor: { brand: string };

// monitor라는 객체는 brand와 price이외의 다른 property(속성)를 가질 수 없다
// property : "key(키) : value(값)"의 형식 = 객체 내부의 속성
// value 속성값 : 객체에 함수를 정의할 경우 => method
monitor.brand = "LG";

// price property를 찾을 수 없다
monitor.price = 120;

monitor = {
  brand: "LG",
  price: 120,
};

// monitor객체 내부에 displaySize 속성이 존재하지 않는다.
monitor.displaySize = "22inch";

/* 타입 추론 : 객체리터럴을 사용할때 TS에게
각 property에 할당된 값을 바탕으로 타입을 추론하라*/

let monitor2 = {
  brand: "LG",
  price: 120,
};

monitor2.price = "123";
monitor2.displaySize = "12inch";

/* optional : 객체 내에서 필수가 아닌 property (선택사항) */

let user: { id: string; name: string; age?: number };

// user객체에 age property가 없어도 오류가 발생하지 않는다
user = {
  id: "123",
  name: "John",
};

/* readonly : (읽기전용) property 값을 변경하지 않아야 할 경우
객체가 처음 생성될 때만 값을 할당 할 수 있음, 그 이후에는 변경할 수 없음
환경설정 정보를 담고있는 객체에 많이 사용됨 */

let user2: { readonly id: string; name: string; age?: number };

user2 = {
  id: "123",
  name: "John",
};

user2.name = "Smith";
user2.id = "5678";

// 값의 변형을 방지
let apiConfig: {
  readonly clientKey: string;
  readonly url: string;
};

/* 타입 별칭 (Type Alias) : 
리터럴로 반복적으로 타입정의를 하게 되면 코드가 지저분해지고 가독성이 떨어짐
이를 보완하기 위한 기능 => 재사용 가능 */

// readonly를 사용한다 하더라도 UserType에서만 관리하면 되기 때문에 편리
// UserType만 정의하면 되기 때문에 코드의 가독성이 올라감
type UserType = {
  readonly id: string;
  name: string;
  age?: number;
};

let user1: UserType = {
  id: "1",
  name: "Horn",
  age: 20
}

let user4: UserType = {
  id: "4",
  name: "Joy"
}

let user3: UserType = {
  id:"2"
  gender: "female"
}

let users: UserType[];

users.push(user1, user4)

users.push({})
users.push({
  id: "1345"
})

/* Nested : (중첩객체) 
실무에서 자주 접하는 케이스, 데이터를 읽거나 처리 할 때
API 요청, 응답에 사용되는 JSON객체가 이에 해당됨 
해당 객체의 형태와 구조를 바탕으로 타입을 명시한다 */

type Payload = {
  timestamp: number,
  type: string,
  userland: {
    readonly id: string,
    isActive?: boolean
    name: string[]
  }
}

const payload: Payload = {
  timestamp: 123153235135,
  type: 'event',
  userland: {
    id: "123456",
    isActive: true,
    name: ["Sumin", "SilverTear", "Siltea"]
  }
}

