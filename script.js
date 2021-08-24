"use strict";

const createPlayer = function (name, scoreType) {
  let playerName = name;
  let playerScore = scoreType;
  const getName = () => playerName;

  return { playerName, playerScore, getName };
};

const gameBoard = (() => {
  //
  let gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  //
  let menuContainer = document.querySelector(".container-playerSelect");
  let gameContainer = document.querySelector(".container-game");
  let playButton = document.getElementById("btn-play");
  //   let inputOne = document.getElementById("input-one");
  //   let inputTwo = document.getElementById("input-two");

  //
  playButton.addEventListener("click", function () {
    menuContainer.style.display = "none";
    gameContainer.style.display = "grid";
    //
    // let playerOne = createPlayer(`${inputOne.value}` || "Player One", "X");
    // let playerTwo = createPlayer(`${inputTwo.value}` || "Player Two", "O");
    //
  });

  function createBlock() {
    let block = document.createElement("div");
    block.classList.add("block");
    gameContainer.appendChild(block);
  }

  gameBoardArray.forEach(createBlock);

  function renderValues() {
    let allBlocks = document.querySelectorAll(".block");
    for (let i = 0; i < gameBoardArray.length; i++) {
      allBlocks[i].innerText = gameBoardArray[i];
    }
  }

  return { gameBoardArray, renderValues, createBlock };
})();

const displayController = (() => {
  //
  let allBlocks = document.querySelectorAll(".block");
  let game = false;
  //
  //
  function playerMove() {
    for (let i = 0; i < allBlocks.length; i++) {
      let eachBlock = allBlocks[i];
      eachBlock.addEventListener("click", function () {
        if (eachBlock.innerHTML === "") {
          gameBoard.gameBoardArray.splice(i, 1, game ? "O" : "X");
          gameBoard.renderValues();
          game = !game;
          console.log(gameBoard.gameBoardArray);
        }
      });
    }
  }
  playerMove();
})();
