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
  let tableContainer = document.querySelector(".container-table");

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
  let playerOneName = document.querySelector("#player1");
  let playerTwoName = document.querySelector("#player2");
  //
  let playerOne;
  let playerTwo;
  //
  function playerMove() {
    for (let i = 0; i < allBlocks.length; i++) {
      let eachBlock = allBlocks[i];
      eachBlock.addEventListener("click", function () {
        if (gameBoard.gameBoardArray[i] === "") {
          gameBoard.gameBoardArray.splice(i, 1, game ? "O" : "X");
          //
          eachTurn();
          checkWinner(gameBoard.gameBoardArray);
          //
          gameBoard.renderValues(gameBoard.gameBoardArray);
          game = !game;
        }
      });
    }
  }
  playerMove();
  //
  function eachTurn() {
    if (game) {
      playerOneName.classList.add("currentTurn");
      playerTwoName.classList.remove("currentTurn");
    } else if (!game) {
      playerOneName.classList.remove("currentTurn");
      playerTwoName.classList.add("currentTurn");
    }
  }

  //
  function checkWinner(arr) {
    if (arr[0] === "X" && arr[1] === "X" && arr[2] === "X") {
      console.log("X WINS");
    } else if (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") {
      console.log("X WINS");
    } else if (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") {
      console.log("X WINS");
    } else if (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") {
      console.log("X WINS");
    } else if (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") {
      console.log("X WINS");
    } else if (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") {
      console.log("X WINS");
    } else if (arr[0] === "X" && arr[4] === "X" && arr[8] === "X") {
      console.log("X WINS");
    } else if (arr[2] === "X" && arr[4] === "X" && arr[6] === "X") {
      console.log("X WINS");
    } else if (arr[0] === "O" && arr[1] === "O" && arr[2] === "O") {
      console.log("O WINS");
    } else if (arr[3] === "O" && arr[4] === "O" && arr[5] === "O") {
      console.log("O WINS");
    } else if (arr[6] === "O" && arr[7] === "O" && arr[8] === "O") {
      console.log("O WINS");
    } else if (arr[0] === "O" && arr[3] === "O" && arr[6] === "O") {
      console.log("O WINS");
    } else if (arr[1] === "O" && arr[4] === "O" && arr[7] === "O") {
      console.log("O WINS");
    } else if (arr[2] === "O" && arr[5] === "O" && arr[8] === "O") {
      console.log("O WINS");
    } else if (arr[0] === "O" && arr[4] === "O" && arr[8] === "O") {
      console.log("O WINS");
    } else if (arr[2] === "O" && arr[4] === "O" && arr[6] === "O") {
      console.log("O WINS");
    }
  }
  //
  function gameOver() {}
  //
  playButton.addEventListener("click", function () {
    let inputOne = document.getElementById("input-one").value;
    let inputTwo = document.getElementById("input-two").value;
    //
    let playerOneName = document.getElementById("player1");
    let playerTwoName = document.getElementById("player2");
    //
    menuContainer.style.display = "none";
    gameContainer.style.display = "flex";
    //
    playerOne = createPlayer(`${inputOne} (X's)`, "X");
    playerTwo = createPlayer(`${inputTwo} (0's)`, "O");
    //
    playerOneName.textContent = `${playerOne.getName()}` || "Player One";
    playerTwoName.textContent = `${playerTwo.getName()}` || "Player Two";
    //
    playerOneName.classList.add("currentTurn");
    //
  });
  //
  restartButton.addEventListener("click", function () {
    let allBlocksCleaned = document.querySelectorAll(".block");
    //
    menuContainer.style.display = "flex";
    gameContainer.style.display = "none";
    //
    playerTwoName.classList.remove("currentTurn");
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
