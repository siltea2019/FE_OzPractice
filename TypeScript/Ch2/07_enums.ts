/* 기본 문법 */
enum 이름 {
  상수값1,
  상수값2,
  상수값3,
}

// 숫자형 enum
enum PlayerState {
  Buffering,
  Playing,
  Paused,
  Seeking,
}

let currentState: PlayerState;

currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;

// 변수를 초기화 할 때 변수가 가질수 있는 범위는 PlayerState로 한정되어 있으므로
currentState = "Paused";

const isPlaying = (state: PlayerState) => {
  return state === PlayerState.Playing;
};

// 플레이어 재생중
isPlaying(currentState);

// 문자형 enum : 이넘 멤버에게 명시적인 문자열 값을 할당
// 디버깅 시, 로깅 등 조금 더 유리함
// 숫자형과 비교시
// 이넘의 사이즈가 크고 디버깅 시 숫자형 만으로는 어떤 멤버를 검사하는지
// 식별하기 어려움
enum Direction {
  Left = "LEFT",
  Right = "RIGHT",
  Up = "UP",
  Down = "DOWN",
}

function move(dir: Direction) {
  switch (dir) {
    case Direction.Left:
      // 왼쪽 로직
      break;
    case Direction.Right:
      // 오른쪽 로직
      break;
    case Direction.Up:
      // 위쪽 로직
      break;
    case Direction.Down:
      // 아래쪽 로직
      break;
  }
}

move(Direction.Left);
move(Direction.Left);

// 문자형 이넘과 스위치케이스 조합을 사용하여
// 특정함수를 통해 허용되는 입력값의 범위를 제한하거나
// 입력값에 따른 로직을 실행, 구현하는 방식으로 실무에서 사용됨
