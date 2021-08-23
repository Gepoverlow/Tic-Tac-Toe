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

/* INTENTO 1

const createPlayer = function (input, number) {
  let playerName = input;
  let playerNumber = number;
  return { playerName, playerNumber };
};

const gameBoard = (() => {
  let gameboard = [];

  const playButton = document.querySelector(".btn-play");

  playButton.addEventListener("click", function () {
    const inputOne = document.getElementById("input-one").value;
    const inputTwo = document.getElementById("input-two").value;

    let playerOne = createPlayer(`${inputOne}`, 1); //input
    let playerTwo = createPlayer(`${inputTwo}`, 2); //input

    console.log(playerOne, playerTwo);
    return { playerOne, playerTwo };
  });
})();

INTENTO 1 */

const createPlayer = function (input, score) {
  let playerName = input;
  let playerScore = score;
  return { playerName, playerScore };
};

const gameBoard = (() => {
  let gameBoardArray = ["o", "x", "o", "x", "x", "x", "o", "o", "x"];

  function createBlock() {
    let parent = document.querySelector(".container-game");
    let block = document.createElement("div");
    block.classList.add("block");
    parent.appendChild(block);
  }

  gameBoardArray.forEach(createBlock);

  function renderValues() {
    let allBlocks = document.querySelectorAll(".block");
    for (let i = 0; i < gameBoardArray.length; i++) {
      allBlocks[i].textContent = gameBoardArray[i];
    }
  }

  return { gameBoardArray, renderValues };
})();

gameBoard.renderValues();
console.log(gameBoard.gameBoardArray);

// const displayController = (() => {
//   const playButton = document.getElementById("btn-play");

//   playButton.addEventListener("click", function () {
//     const playerOneInput = document.getElementById("input-one").value;
//     const playerTwoInput = document.getElementById("input-two").value;

//     document.querySelector(".container-playerSelect").style.display = "none";
//     document.querySelector(".container-game").style.display = "grid";

//     let playerOne = createPlayer(playerOneInput, 1);
//     let playerTwo = createPlayer(playerTwoInput, 2);

//     console.log(playerOne, playerTwo);
//   });
// })();
