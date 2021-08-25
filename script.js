"use strict";

const createPlayer = function (name, scoreType) {
  let playerName = name;
  let playerScore = scoreType;
  const getName = () => playerName;
  const getScore = () => playerScore;

  return { playerName, playerScore, getName, getScore };
};

const gameBoard = (() => {
  //
  let gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  //
  let gameContainer = document.querySelector(".container-game");
  let tableContainer = document.querySelector(".table");

  //
  function createBlock() {
    let block = document.createElement("div");
    block.classList.add("block");
    gameContainer.appendChild(tableContainer);
    tableContainer.appendChild(block);
  }

  function renderValues(array) {
    let allBlocks = document.querySelectorAll(".block");
    for (let i = 0; i < gameBoardArray.length; i++) {
      allBlocks[i].innerText = array[i];
    }
  }

  gameBoardArray.forEach(createBlock);

  return { gameBoardArray, renderValues };
})();

const displayController = (() => {
  let game = false;
  //
  let allBlocks = document.querySelectorAll(".block");
  let playButton = document.getElementById("btn-play");
  let restartButton = document.getElementById("btn-restart");
  let menuContainer = document.querySelector(".container-playerSelect");
  let gameContainer = document.querySelector(".container-game");
  //
  let playerOne;
  let playerTwo;
  //
  playButton.addEventListener("click", function () {
    let inputOne = document.getElementById("input-one").value;
    let inputTwo = document.getElementById("input-two").value;
    let playerOneName = document.getElementById("player1");
    let playerTwoName = document.getElementById("player2");
    //
    menuContainer.style.display = "none";
    gameContainer.style.display = "flex";
    //
    playerOne = createPlayer(`${inputOne}`, "X");
    playerTwo = createPlayer(`${inputTwo}`, "O");
    //
    playerOneName.textContent = `${playerOne.getName()}` || "Player One";
    playerTwoName.textContent = `${playerTwo.getName()}` || "Player Two";
    //
  });
  //
  //
  function playerMove() {
    for (let i = 0; i < allBlocks.length; i++) {
      let eachBlock = allBlocks[i];
      eachBlock.addEventListener("click", function () {
        if (gameBoard.gameBoardArray[i] === "") {
          gameBoard.gameBoardArray.splice(i, 1, game ? "O" : "X");
          console.log(gameBoard.gameBoardArray);
          gameBoard.renderValues(gameBoard.gameBoardArray);
          game = !game;
        }
      });
    }
  }

  playerMove();

  restartButton.addEventListener("click", function () {
    let allBlocksCleaned = document.querySelectorAll(".block");
    menuContainer.style.display = "flex";
    gameContainer.style.display = "none";
    //
    gameBoard.gameBoardArray = ["", "", "", "", "", "", "", "", ""];
    //
    for (let i = 0; i < allBlocksCleaned.length; i++) {
      let eachBlockCleaned = allBlocksCleaned[i];
      eachBlockCleaned.innerHTML = "";
    }
    game = false;
  });
  //

  //
})();
