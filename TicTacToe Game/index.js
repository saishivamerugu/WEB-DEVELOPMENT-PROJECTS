let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGame = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let btn = document.querySelectorAll(".btn");


let turn0 = true;
let turn1 = false;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        
        if (count === 9){
            showDraw();
        }
    });
});

const disableBoxes =()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner =(winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw =()=>{
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =()=>{
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val == pos2val && pos2val == pos3val && pos1val != "") {
            console.log(`player " ${pos1val} " has won! `);
            showWinner(pos1val);
        }
    }
}

const enableBoxes =()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";    
    }
}

const resetGame =()=>{
    turn0 = true;
    count = 0; 
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
