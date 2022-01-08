/* Quiz Progress Variables */
const question = document.getElementById('question');
const options = document.getElementsByClassName('option');
const progressValue = document.getElementById('progressValue');
const scoreValue = document.getElementById('score');
const barProgress = document.getElementById('barProgress');
const answerFeedback = document.getElementById('answer-feedback');

/* Score & Question Variables */
const totalQuestions = 20;
let score = 0
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
    {
        question: 'How many days was Darko Milanić manager of Leeds?',
        option1: '24',
        option2: '32',
        option3: '43',
        option4: '50',
        answer: '32',
    },
    {
        question: 'The last time Leeds made it past the 5th round of the FA cup was the 1997/98 season, who knocked them out?',
        option1: 'Coventry',
        option2: 'Arsenal',
        option3: 'Wolves',
        option4: 'Liverpool',
        answer: 'Wolves',
    },
    {
        question: 'How many points did Leeds get in their 2019/20 promotion season from the Championship?',
        option1: '90',
        option2: '88',
        option3: '95',
        option4: '93',
        answer: '93',
    },
    {
        question: 'What number shirt did former owner Massimo Cellino retire due to his superstition that the number is unlucky?',
        option1: '12',
        option2: '28',
        option3: '17',
        option4: '33',
        answer: '17',
    },
    {
        question: 'Who has scored the most league goals in a season for Leeds since 2000?',
        option1: 'Jermaine Beckford',
        option2: 'Chris Wood',
        option3: 'Ross McCormack',
        option4: 'Mark Viduka',
        answer: 'Ross McCormack',
    },
    {
        question: 'Who did Leeds beat to reach the Play-off final in the 2007/8 season?',
        option1: 'Carlisle',
        option2: 'Southend',
        option3: 'Millwall',
        option4: 'Scunthorpe',
        answer: 'Carlisle',
    },
    {
        question: 'Who was Leeds shirt sponsor in their promotion season from League 1 in 2009/10?',
        option1: 'Bet 24',
        option2: 'RedKite',
        option3: 'NetFlights',
        option4: 'Enterprise Insurance',
        answer: 'NetFlights',
    },
    {
        question: 'Who scored the winner in Leeds 4-3 come back victory over Southampton in 2005?',
        option1: 'David Healy',
        option2: 'Rob Blake',
        option3: 'Liam Miller',
        option4: 'Paul Butler',
        answer: 'Liam Miller',
    },
    {
        question: 'How much did it cost Andrea Radrizzani to buy back Elland Road?',
        option1: '20M',
        option2: '15M',
        option3: '25M',
        option4: '30M',
        answer: '20M',
    },
    {
        question: 'Which team sealed Leeds relegation from the Premier League in 2003/4?',
        option1: 'Birmingham',
        option2: 'Bolton',
        option3: 'Charlton',
        option4: 'Blackburn',
        answer: 'Bolton',
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
    progressValue.innerText = `${questionNumber} / 20`;
}

/* Function to check whether the answer is correct or incorrect */

function checkAnswer() {
    for (let option of options) {
        option.addEventListener('click', function(){
            currentAnswer = currentQuestion.answer;
            if (this.children[1].innerText == currentAnswer) {
                answerFeedback.innerText = `CORRECT`;
                answerFeedback.style.color = '#FFF300';
                setTimeout(quizProgress,1500);
                setTimeout(incrementScore,1500);
            } else {
                answerFeedback.innerText = `CORRECT ANSWER: ${currentAnswer}`;
                answerFeedback.style.color = '#125eaa';
                setTimeout(quizProgress,1500);
            }
            displayFeedback();    
            setTimeout(nextQuestion,1500);
        });
    }
}

function displayFeedback() {
    answerFeedback.style.display = 'block';
    progressValue.style.display = 'none';
}

function nextQuestion() {
    if (questionNumber <= totalQuestions) {
        removeQuestion();
        randomiseQuestions();
        fillQuestions();
    } else if (questionNumber > totalQuestions) {
        scorePage();
    }
}

function removeQuestion() {
    let removeQ = questions.indexOf(currentQuestion);
    questions.splice(removeQ,1);

    currentAnswer = "";

    answerFeedback.style.display = 'none';

    progressValue.style.display = ''

    answerFeedback.innerText = ``;
}

function runGame() {
    localStorage.clear();
    score = 0;
    questionNumber = 1;
    randomiseQuestions();
    fillQuestions();
    checkAnswer();
}

function scorePage() {
    window.location = ('./scorepage.html');
    localStorage.setItem('finalScore', score);
}
