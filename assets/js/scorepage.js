const finalScore = localStorage.getItem('finalScore')
console.log(finalScore)

document.getElementById('final-score').innerText = `You Scored ${finalScore} / 10`