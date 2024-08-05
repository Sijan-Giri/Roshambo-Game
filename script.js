let userScore = 0;
let compScore = 0;

const choiceEl = document.querySelectorAll(".choice");
const msgEl = document.querySelector("#msg");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

const genCompChoice = () => {
    let option = ["rock","paper","scissor"];
    let rndmChoice = Math.floor(Math.random() * 3);
    return option[rndmChoice];
}

const gameDraw = () => {
    msgEl.innerText = "Game is Drawn!";
    msgEl.style.backgroundColor = "black";
}

const showGame = (userWin) => {
    if(userWin) {
        msgEl.innerText = "You Win!";
        msgEl.style.backgroundColor = "green";
        userScore++;
        userScoreEl.innerText = userScore;
    }
    else {
        msgEl.innerText = "You Lose!";
        msgEl.style.backgroundColor = "red";
        compScore++;
        compScoreEl.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    let userWin = true;
    if(userChoice === compChoice) {
        gameDraw();
    }
    else {
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showGame(userWin);
    }
}

choiceEl.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});