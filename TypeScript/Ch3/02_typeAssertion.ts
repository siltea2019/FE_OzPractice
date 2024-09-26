const someValueB: unknown = "Hey there";

let len = someValueB.length; // error

len = (someValueB as string).length; //

// HTMLElement | null
const input = document.getElementById("myInput") as HTMLInputElement;
input.value;

const button = document.getElementById("button") as HTMLButtonElement;

button.disabled = false;

if (button instanceof HTMLButtonElement) {
  button.disabled = false;
}

if (button) {
  button.disabled = false;
}

// 메서드를 사용해서 버튼을 선택했는데 버튼이 실질적으로 HTML문서에 존재하지 않을떄는 null값 반환
// 버튼 존재 유무 확인 필요

// 타입단언의 경우 정말 필요하고 타입에 대한 확신이 있을때 사용을 추천
