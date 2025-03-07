// // 안쓰면 읽자마자 실행
// // 윤택한 형태의 무언가를 만들 수 있

// //반복해서 하면ㅇ ㅏㄴ되나?
// //setInterval() : 일정 시간 간격으로 작업을 수행하기 위해 사용

// // const pokemon = require("pokemon");

// // let get = [];

// // let pokemons = pokemon.all("ko");
// // let count = 0;

// // let temp = setInterval(() => {
// //   if (count < pokemons.length) {
// //     console.log(pokemons[count]);
// //     if (pokemons[count] === "뮤츠") {
// //       clearInterval(temp);
// //     }

// //     count++;
// //   } else {
// //     clearInterval(temp);
// //   }
// // } , 1000);

// const express = require("express");
// const path = require("path");
// const app = express();

// const pokemon = require("pokemon");

// let get = [];

// let sec = 1000;

// let pokemons = pokemon.all("ko");
// let count = 0;

// let temp = setInterval(() => {
//   if (count < pokemons.length) {
//     console.log(pokemons[count]);
//     if (pokemons[count].length === 3) {
//       get.push(pokemons[count]);
//     }

//     console.log(get);
//     count++;
//   } else {
//     clearInterval(temp);
//   }
// }, 100);

// setTimeout(() => {
//   clearInterval(temp);
//   console.log("10초 끝~");
// }, 10 * sec);
