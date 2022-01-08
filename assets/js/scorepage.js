const finalScore = localStorage.getItem('finalScore')

document.getElementById('final-score').innerText = `You Scored ${finalScore} / 20` // Displays final score to user

let endQuote = document.getElementById('finish-quote');

// Displays quote to user, depending on their final score
if (finalScore <= 5) {
    endQuote.innerText = "You've done a Rachubka, absolute shocker!";
} else if (finalScore <= 10) {
    endQuote.innerText = "That's a classic Leeds play-off performance, bottled it!";
} else if (finalScore <= 13) {
    endQuote.innerText = "Unlucky Gaetano, I know you gave it your all";
} else if (finalScore <= 17) {
    endQuote.innerText = "A Cookstown Cafu of a perfromance, solid effort";
} else if (finalScore <= 19) {
    endQuote.innerText = "Like Lord Bamford silencing the haters, exceptional perfomance";
} else if (finalScore == 20) {
    endQuote.innerText = "God like knowledge, Marcelo would be proud!";
}

