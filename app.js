let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const games = ['Kamen', 'Papir', 'Makaze'];
    return games[Math.floor(Math.random() * games.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Kamen' && computerSelection == 'Makaze') {
        playerScore++;
        return 'Pobedio si! Kamen pobeđuje Makaze. Rezultat:' + playerScore + ':' + computerScore;
    } else if (playerSelection == 'Kamen' && computerSelection == 'Papir') {
        computerScore++;
        return 'Izgubio si, Kamen gubi od Papira. Rezultat:' + playerScore + ':' + computerScore;
    } else if (playerSelection == 'Papir' && computerSelection == 'Makaze') {
        computerScore++;
        return 'Izgubio si, Papir gubi od Makaza. Rezultat:' + playerScore + ':' + computerScore;
    } else if (playerSelection == 'Papir' && computerSelection == 'Kamen') {
        playerScore++;
        return 'Pobedio si! Papir pobeđuje Kamen. Rezultat:' + playerScore + ':' + computerScore;
    } else if (playerSelection == 'Makaze' && computerSelection == "Kamen") {
        computerScore++;
        return 'Izgubio si, Makaze gube od Kamena. Rezultat: ' + playerScore + ':' + computerScore;
    } else if (playerSelection == 'Makaze' && computerSelection == 'Papir') {
        playerScore++;
        return 'Pobedio si! Makaze pobeđuju Papir. Rezultat: ' + playerScore + ':' + computerScore;
    }
    else return 'To je nerešeno! Rezultat: ' + playerScore + ':' + computerScore;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Šta biraš? Kamen,Papir,Makaze.')
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log('Ti si pobednik! Finalni Rezultat:' + playerScore + ':' + computerScore);
    } else if (computerScore > playerScore) {
        console.log('Ti si gubitnik, Finalni Rezultat:' + playerScore + ':' + computerScore);
    } else
        console.log('Nerešeno je! Finalni Rezultat: ' + playerScore + ':' + computerScore);
}

game();

