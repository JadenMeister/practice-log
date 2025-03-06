// 캐터피 -> 단데기 -> 버터풀

// 꼬부기 -> 어니부기 -> 거북왕

// 고수준 언어 - 위에서 아래로

// 두개의 매개변수,, 1. 함수, 2. 시간
// 할일을 놓았다가 꺼내는
// 로딩이 너무 오래걸리면 사람들이 싫어함, 먼저 빠르게 보여줄 수 있는 것들은 우선 보냄
// setTimeout(a());

// window.setTimeout();
// global.setTimeout;

// let time = 2000;

// setTimeout(function () {
//   console.log("꼬부기");
//   setTimeout(function () {
//     console.log("어니부기");
//   }, 1 * time);
// }, 1 * time);

// setTimeout(function () {
//   console.log("거북왕");
// }, 1 * time);

// Millisecond
// 1/1000
// 1000 = 1s
// 100 = 0.1s
// 16 = 0.016

// let students = [];
// let name = "아놀드";

// setTimeout(() => {
//   students.push("제임스본드");
//   console.log(students);
// }, 1000);

// console.log(students);

// function noStar(item) {
//   setTimeout(() => {
//     console.log(item);
//   }, 1000);
// }

// setTimeout(() => {
//   console.log("꼬부기");
// }, 0);
// console.log("어니부기");
// noStar("거북왕");

// setTimeout(() => {
//   console.log("꼬부기");
//   setTimeout(() => {
//     console.log("어니부기");
//     setTimeout(() => {
//       console.log("거북왕");
//     }, 1000);
//   }, 2000);
// }, 3000);

// let youhoon = () => {
//   setTimeout(() => {
//     console.log("요훈");

//     youhoon();
//   }, 1000);
// };

// youhoon();
