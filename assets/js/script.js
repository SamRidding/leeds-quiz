/* Quiz Progress Variables */
const question = document.getElementById('question');
const options = document.getElementsByClassName('option');
const progressValue = document.getElementById('progressValue');
const scoreValue = document.getElementById('score');
const barProgress = document.getElementById('barProgress');

/* Score & Question Variables */
const points = 1;
const totalQuestions = 10;
let currentQuestion;
let currentAnswer;
let questionNumber;
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
        answer: 'Aaron Lennon',
    },
    {
        question: 'Which club did Leeds sign striker Luciano Becchio from?',
        option1: 'Rayo Vallecano',
        option2: 'Marino',
        option3: 'Mérida',
        option4: 'Talavera',
        answer: 'Mérida',
    },
    {
        question: 'In what season did Leeds win the FA Cup?',
        option1: '1967/68',
        option2: '1971/72',
        option3: '1969/70',
        option4: '1976/77',
        answer: '1971/72',
    },
    {
        question: 'Who knocked Leeds out of the Champions League in the 2001 Semi-finals?',
        option1: 'Real Madrid',
        option2: 'Bayern Munich',
        option3: 'Valencia',
        option4: 'Lyon',
        answer: 'Valencia',
    },
    {
        question: 'What shirt number did Pablo Hernandez wear for Leeds?',
        option1: '19',
        option2: '23',
        option3: '7',
        option4: '15',
        answer: '19',
    },
    {
        question: 'Who was captain for Leeds in the 2015/16 season?',
        option1: 'Liam Cooper',
        option2: 'Sol Bamba',
        option3: 'Liam Bridcutt',
        option4: 'Souleymane Doukara',
        answer: 'Liam Bridcutt',
    },
    {
        question: 'Who has had the most appearances in the Premier League for Leeds?',
        option1: 'Lucas Radabe',
        option2: 'Garry Kelly',
        option3: 'Ian Harte',
        option4: 'Nigel Martyn',
        answer: 'Garry Kelly',
    },
    {
        question: 'How many goals did Patrick Bamford score for Leeds in the 2020/21 season?',
        option1: '14',
        option2: '19',
        option3: '16',
        option4: '17',
        answer: '17',
    },
    {
        question: 'In what year did Leeds reach the European Cup Final?',
        option1: '1975',
        option2: '1972',
        option3: '1978',
        option4: '1980',
        answer: '1975',
    },
    {
        question: 'In what year did Leeds sign Jermaine Beckford?',
        option1: '2008',
        option2: '2005',
        option3: '2006',
        option4: '2007',
        answer: '2006',
    },

]

/* Function to randomise the question order before quiz starts */

function randomiseQuestions() {
    let questionPool = questions.length;
    let random = Math.floor(Math.random() * questionPool);
    currentQuestion = questions[`${random}`];
}

function fillQuestions() {
    question.innerText = currentQuestion.question;

    let opt1 = document.getElementById('opt1');
    opt1.innerText = currentQuestion.option1;

    let opt2 = document.getElementById('opt2');
    opt2.innerText = currentQuestion.option2;

    let opt3 = document.getElementById('opt3');
    opt3.innerText = currentQuestion.option3;

    let opt4 = document.getElementById('opt4');
    opt4.innerText = currentQuestion.option4;

}

function incrementScore() {
    score++;
    scoreValue.innerText = score;
}

function quizProgress() {
    questionNumber++;
    progressValue.innerText = `${questionNumber} / 10`;
}

/* Function to check whether the answer is correct or incorrect */

function checkAnswer() {
    for (let option of options) {
        option.addEventListener('click', function(){
            currentAnswer = currentQuestion.answer;
            if (this.children[1].innerText == currentAnswer) {
                quizProgress();
                incrementScore();
            } else {
                quizProgress();
            }
            nextQuestion();
        })
    }
}

function nextQuestion() {
    if (questionNumber < totalQuestions) {
        removeQuestion();
        randomiseQuestions();
        fillQuestions();
    } else if (questionNumber == totalQuestions) {
        console.log('End Of Quiz')
    }
}

function removeQuestion() {
    let removeQ = questions.indexOf(currentQuestion);
    questions.splice(removeQ,1);

    currentAnswer = "";
}

function runGame() {
    score = 0;
    questionNumber = 1;
    randomiseQuestions();
    fillQuestions();
    checkAnswer();
}










