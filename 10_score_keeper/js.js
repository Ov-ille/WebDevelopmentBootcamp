
const winnerText = document.querySelector("#winner");

function getWinnerTextPosition() {
    // calculate position for winner text
    let h1Position = document.querySelector("h1").getBoundingClientRect();
    winnerText.style.top = `${h1Position.top - 30}px`
    winnerText.style.left = `${h1Position.width / 2 + h1Position.left - 100}px`
}
getWinnerTextPosition()

window.addEventListener("resize", getWinnerTextPosition);

let maxScore = document.querySelector("#score-max").value;
// remove hover effect for buttons when dropdown expands
document.querySelector("#score-max").addEventListener("focus", function () {
    for (i of document.querySelectorAll(".btn-control")) {
        i.classList.remove("btn-control-active");
    }
})
document.querySelector("#score-max").addEventListener("change", function () {
    // set max score and add hover effect for buttons when dropdown expands
    maxScore = this.value;
    for (i of document.querySelectorAll(".btn-control")) {
        i.classList.add("btn-control-active");
    }
})
// set hover effect for buttons when dropdown expands
document.querySelector("#score-max").addEventListener("blur", function () {
    for (i of document.querySelectorAll(".btn-control")) {
        i.classList.add("btn-control-active");
    }
})

let scoreP1 = 0;
let scoreP2 = 0;
function countPlayer(player) {
    let currentScore = null;
    // increase score
    if (player == 1) {
        scoreP1++;
        currentScore = scoreP1;
    }
    else if (player == 2) {
        scoreP2++;
        currentScore = scoreP2;

    }
    // set score text to score
    document.querySelector(`#score-p${player}`).textContent = currentScore;
    // check if current score is max score --> game over
    if (currentScore == maxScore) {
        // set winner text to winning player
        document.querySelector("#winner-player").textContent = `${player}`
        // disable counter buttons and remove hover effect
        for (i of document.querySelectorAll(".btn-count")) {
            i.classList.remove("btn-control-active");
            i.disabled = true;
        }

        //  disable dropdown
        document.querySelector("#score-max").disabled = true;

        // change winner text color to player color and show winner text
        if (player == 1) {
            winnerText.style.color = "rgb(151, 151, 251)";
        }
        else if (player == 2) {
            winnerText.style.color = "rgb(129, 172, 189)";
        }
        winnerText.classList.toggle("display-none");
        winnerText.classList.toggle("display-flex");


    }
}

// add counter function to counter button 1 and 2
document.querySelector(`#btn-1`).addEventListener("click", function () {
    countPlayer(1);
})

document.querySelector("#btn-2").addEventListener("click", function () {
    countPlayer(2);
})

// reset game on click
document.querySelector(".btn-reset").addEventListener("click", function () {
    // reset scores to 0
    scoreP1 = 0;
    scoreP2 = 0;
    document.querySelector("#score-p1").textContent = scoreP1;
    document.querySelector("#score-p2").textContent = scoreP2;

    // enable buttons and add hover effect
    for (i of document.querySelectorAll(".btn-count")) {
        i.classList.add("btn-control-active");
        i.disabled = false;
    }

    // enable dropdown
    document.querySelector("#score-max").disabled = false;

    // hide winner text
    winnerText.classList.toggle("display-none");
    winnerText.classList.toggle("display-flex");
})