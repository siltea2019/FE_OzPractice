// 1

let nums1: number[] = [1, 2, 3, 4, 5]; // 숫자만 허용
let color1: string[] = ["red", "green", "blue"]; // 문자만 허용
let strs1: string[] = ["a", "b", "c"];
let bools1: boolean[] = [false, false, true];

nums1.push(6);
nums1.push(7);
nums1.push("8"); // error : 문자 할당X
nums1[0] = "1"; // error : 문자 할당X

bools1.push(true);
bools1.push(1); // error : 숫자 할당X
bools1.push("8"); // error : 문자 할당X

// 툴링 지원 : 코드에디터 사용시 타입에 따른 자동완성, 힌트(인텔리센스)사용 수월

// 2

let nums2: Array<number> = [1, 2, 3, 4, 5]; // 숫자만 허용
let color2: Array<string> = ["red", "green", "blue"]; // 문자만 허용
let strs2: Array<string> = ["a", "b", "c"];
let bools2: Array<boolean> = [false, false, true];
