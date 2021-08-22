"use strict";
// //Factory Function INTRO ////////////////////////////////////////////////

// const bookFactory = (title, author, pages) => {
//   const returnInfo = () =>
//     console.log(`${title} written by ${author} has ${pages} pages`);
//   return { title, author, pages, returnInfo };
// };

// const Book = bookFactory("Harry Potter", "JK Rowling", 136);

// console.log(Book);
// console.log(Book.title);
// console.log(Book.author);
// console.log(Book.pages);
// Book.returnInfo();

// ///////////////////////////////////////////////////////////////////////////

// const playerFactory = (name, playerNumber) => {
//   const givePlayerInfo = () =>
//     console.log(`${name} is player number ${playerNumber}`);
//   return { name, playerNumber, givePlayerInfo };
// };

// const luke = playerFactory("Luke", 1);
// const palo = playerFactory("Palo", 2);

// console.log(luke);
// console.log(palo);
// luke.givePlayerInfo();
// palo.givePlayerInfo();

// // Modules INTRO ///////////////////////////////////////////////////////////

//  const calculator = (() => {
//    const add = (a, b) => a + b;
//    const sub = (a, b) => a - b;
//    const mul = (a, b) => a * b;
//    const div = (a, b) => a / b;
//    return {
//     add,
//     sub,
//     mul,
//     div,
//   };
// })();

// calculator.add(3, 5); // 8
// calculator.sub(6, 2); // 4
// calculator.mul(14, 5534); // 77476

// //////////////////////////////////////// REVEALING MODULE PATTERN ///////////////////////////

// var myModule = (function () {
//   "use strict";

//   var _privateProperty = "Hello World";
//   var publicProperty = "I am a public property";

//   function _privateMethod() {
//     console.log(_privateProperty);
//   }

//   function publicMethod() {
//     _privateMethod();
//   }

//   return {
//     publicMethod,
//     publicProperty,
//   };
// })();

// myModule.publicMethod(); // outputs 'Hello World'
// console.log(myModule.publicProperty); // outputs 'I am a public property'
// console.log(myModule._privateProperty); // is undefined protected by the module closure
// myModule._privateMethod(); // is TypeError protected by the module closure

//MODULES

const gameBoard = (() => {
  let gameboard = [1, 2, 3];
  return { gameboard };
})();

console.log(gameBoard);
console.log(gameBoard.gameboard);

const displayController = () => {};

const playerFactory = (name, playerNumber) => {
  const givePlayerInfo = () =>
    console.log(`${name} is player number ${playerNumber}`);
  return { name, playerNumber, givePlayerInfo };
};
