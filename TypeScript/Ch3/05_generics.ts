/* 제네릭 클래스 */
// 하나의 제네릭타입 T를 저장하고 꺼내오는 기본적인 컨테이너 역할
class Item<T> {
  #content: T | null;

  constructor() {
    this.#content = null;
  }

  setItem(value: T) {
    this.#content = value;
  }

  getItem(): T | null {
    return this.#content;
  }
}

// 제네릭 클래스 생성 : T 제네릭타입을 사용 ⇒ T타입이 어디에 어떻게 사용되는지 눈여겨 볼것
// 다양한 타입의 값들을 처리한다

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem(); // 100반환

const stringItem = new Item<string>();
stringItem.setItem("Hello");
stringItem.getItem(); // "Hello"

/* 클래스와 인터페이스의 사용 */
// 사용자데이터 관리하는 저장소 구현
interface User {
  id: number;
  name: string;
}

// store를 통해 서버, 백엔드와 커뮤니케이션 User의 객체를 관리
interface Store<T> {
  findById(id: number): T | undefined;
  save(Item: T): void;
}

class UserRepository implements Store<User> {
  // 내부적으로 user들을 저장하고 관리
  #users: User[] = [];

  // 아이디로 사용자를 찾고
  findById(id: number): User | undefined {
    return this.#users.find((user) => user.id === id);
  }

  // 사용자를 배열에 저장
  save(user: User): void {
    this.#users.push(user);
  }
}

// 사용예시
const userRepo = new UserRepository();
userRepo.save({
  id: 1,
  name: "Josh",
});

userRepo.save({
  id: 2,
  name: "Amy",
});

console.log(userRepo.findById(1));

// 예시 2

interface Product {
  id: number;
  price: number;
  name: string;
}

class ProductRepository implements Store<Product> {
  #products: Product[] = [];

  findById(id: number): Product | undefined {
    return this.#products.find((products) => products.id === id);
  }

  save(products: Product): void {
    this.#products.push(products);
  }
}

const productRepo = new ProductRepository();

productRepo.save({
  id: 10,
  price: 100,
  name: "Keyboard",
});
productRepo.save({
  id: 20,
  price: 200,
  name: "Monitor",
});

console.log(productRepo.findById(20));

// 제네릭의 제약의 추가
// 전달받는 인터페이스의 특정 속성이나 메서드를 가져야 한다는 조건을 줘야 할때
// => 제네릭의 제약을 추가하는 방법

// WhitId => Store T타입의 제약조건
// Store라는 제네릭 인터페이스를 사용할 때는 모든 저장 객체들이
// Id가 속성을 가지고 있어야 한다
interface WhitId {
  id: number;
}

interface Store<T extends WhitId> {
  findById(id: number): T | undefined;
  save(Item: T): void;
}

// 제약을 추가함으로써 UserRepository클래스 내의 모든 메서드는
// User 타입이 id객체를 무조건 가지고 있어야 한다는
// 제약조건이 생성됨 -> 이 제약 조건으로 인해 다른 타입의 변수가 들어오는 것을 막고
// 안전하게 데이터를 받아올수 있는 로직이 만들어질 수 있다
