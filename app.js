let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWordUpper(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function convertToWordLower(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    return "scissors";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    userScore_span.classList.add('score-glow');
    computerScore_span.classList.remove('score-glow');
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
    switch (userChoice) {
        case "r":
            result_p.innerHTML = `${convertToWordUpper(userChoice).fontcolor("E2584D")} smashes ${convertToWordLower(computerChoice).fontcolor("6B86C4")}. You win!`;
            break;
        case "p":
            result_p.innerHTML = `${convertToWordUpper(userChoice).fontcolor("E2584D")} covers ${convertToWordLower(computerChoice).fontcolor("6B86C4")}. You win!`;
            break;
        case "s":
            result_p.innerHTML = `${convertToWordUpper(userChoice).fontcolor("E2584D")} cut ${convertToWordLower(computerChoice).fontcolor("6B86C4")}. You win!`;
            break;
    }
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    computerScore_span.classList.add('score-glow');
    userScore_span.classList.remove('score-glow');
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
    switch (userChoice) {
        case "r":
            result_p.innerHTML = `${convertToWordUpper(computerChoice).fontcolor("6B86C4")} covers ${convertToWordLower(userChoice).fontcolor("E2584D")}. You lose.`;
            break;
        case "p":
            result_p.innerHTML = `${convertToWordUpper(computerChoice).fontcolor("6B86C4")} cut ${convertToWordLower(userChoice).fontcolor("E2584D")}. You lose.`;
            break;
        case "s":
            result_p.innerHTML = `${convertToWordUpper(computerChoice).fontcolor("6B86C4")} smashes ${convertToWordLower(userChoice).fontcolor("E2584D")}. You lose.`;
            break;
    }
}

console.log("abc");

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.classList.remove('score-glow');
    computerScore_span.classList.remove('score-glow');
    result_p.innerHTML = `You have both chosen ${convertToWordLower(computerChoice)}. It's a draw.`;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 400);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();