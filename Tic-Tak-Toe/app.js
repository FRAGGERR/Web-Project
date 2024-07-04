//fetching all the boxes

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rbtn");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turn0 = true; // player-X, player-O

//winning conditions
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//event listeners
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;

    checkWin();
  });
});
newGame.addEventListener("click", () => {
    restGame();
})
resetBtn.addEventListener("click", () => {
    restGame();
})


//reset game
const restGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

//disable all the boxes
const disableBoxes = () => {
    boxes.forEach((box) => {
      box.disabled = true;
    });
  }

//enable all the boxes
  const enableBoxes = () => {
    boxes.forEach((box) => {
      box.disabled = false;
      box.innerText = "";
    });
  }


//show winner
const showWinners = (winner) => {
    msg. innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

//check win
const checkWin = () => {
  for (pattern of winningConditions) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinners(pos1Val);
      }
    }
  }
};



