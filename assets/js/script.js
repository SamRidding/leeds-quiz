/* Quiz Progress Variables */
const question = document.getElementById('question');
const options = document.getElementsByClassName('option-text');
const questionValue = document.getElementById('questionValue');
const scoreValue = document.getElementById('score');
const barProgress = document.getElementById('barProgress');

/* Score & Question Variables */
const points = 1
const totalQuestions = 10
let score = 0
let questionPool;
let currentQuestion;
let questionsAnswered;
let availableQuestions;

/* Add event listener to check DOM content has loaded before quiz starts */
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
    runGame();        
})






