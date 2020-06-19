function choice(input) {
    switch (input) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
        default:
            break;
    }
}

function  resultMessage(msg) {
    var message = document.getElementById("message");
    var info = document.createElement("div");
    info.textContent = msg;
    message.appendChild(info);
}

function result(playHand, compHand) {
    if (playHand === compHand) {
        resultMessage("It's a tie!")
    } else if (playHand === "Rock") {
        if (compHand === "Paper") {
            resultMessage("You lose!")
        } else {
            resultMessage("You Win!")
        }
    } else if (playHand === "Paper") {
        if (compHand === "Scissors") {
            resultMessage("You lose!")
        } else {
            resultMessage("You Win!")
        }
    } else if (playHand === "Scissors") {
        if (compHand === "Rock") {
            resultMessage("You lose!")
        } else {
            resultMessage("You Win!")
        }
    }
}


function game(input) {
    var comp = Math.floor(Math.random() * 3)
    var compHand = choice(comp)
    var playHand = input

    resultMessage("You chose: " + playHand)
    resultMessage("The computer chose: " + compHand)
    result(playHand, compHand)
    console.clear()
}
