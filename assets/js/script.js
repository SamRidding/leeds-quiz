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
let currentQuestion;
let questionsAnswered;
let availableQuestions;

/* Add event listener to check DOM content has loaded before quiz starts */
document.addEventListener('DOMContentLoaded', function() {
    runGame();     
})

/* Quiz Questions */
let questions = [
    {
        question: 'Who is Leeds youngest player to play in the Premier League?',
        option1: 'James Milner',
        option2: 'Alan Smith',
        option3: 'Harry Kewell',
        option4: 'Aaron Lennon',
        answer: 4,
    },
    {
        question: 'Which club did Leeds sign striker Luciano Becchio from?',
        option1: 'Rayo Vallecano',
        option2: 'Marino',
        option3: 'Mérida',
        option4: 'Talavera',
        answer: 3,
    },
    {
        question: 'In what season did Leeds win the FA Cup?',
        option1: '1967/68',
        option2: '1971/72',
        option3: '1969/70',
        option4: '1976/77',
        answer: 2,
    },
    {
        question: 'Who knocked Leeds out of the Champions League in the 2001 Semi-finals?',
        option1: 'Real Madrid',
        option2: 'Bayern Munich',
        option3: 'Valencia',
        option4: 'Lyon',
        answer: 3,
    },
    {
        question: 'What shirt number did Pablo Hernandez wear for Leeds?',
        option1: '19',
        option2: '23',
        option3: '7',
        option4: '15',
        answer: 1,
    },
    {
        question: 'Who was captain for Leeds in the 2015/16 season?',
        option1: 'Liam Cooper',
        option2: 'Sol Bamba',
        option3: 'Liam Bridcutt',
        option4: 'Souleymane Doukara',
        answer: 3,
    },
    {
        question: 'Who has had the most appearances in the Premier League for Leeds?',
        option1: 'Lucas Radabe',
        option2: 'Garry Kelly',
        option3: 'Ian Harte',
        option4: 'Nigel Martyn',
        answer: 2,
    },
    {
        question: 'How many goals did Patrick Bamford score for Leeds in the 2020/21 season?',
        option1: '14',
        option2: '19',
        option3: '16',
        option4: '17',
        answer: 4,
    },
    {
        question: 'In what year did Leeds reach the European Cup Final?',
        option1: '1975',
        option2: '1972',
        option3: '1978',
        option4: '1980',
        answer: 1,
    },
    {
        question: 'In what year did Leeds sign Jermaine Beckford?',
        option1: '2008',
        option2: '2005',
        option3: '2006',
        option4: '2007',
        answer: 3,
    },

]

/* Function to randomise the question order before quiz starts */

function randomiseQuestions() {
    let questionPool = questions.length;
    let random = Math.floor(Math.random() * questionPool);
    currentQuestion = questions[`${random}`];
}

function fillQuestions() {
    
}

function checkAnswer() {

}

function nextQuestion() {

}

function runGame() {
    randomiseQuestions()
}










