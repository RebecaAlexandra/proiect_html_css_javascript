const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
        {
            question: "Care este relatia dintre Monica si Ross?",
            choice1:"Cei mai buni prieteni",
            choice2:"Frati",
            choice3:"Iubiti",
            choice4:"Colegi de apartament",
            answer: 2
        },
        {
            question: "Ce personaj canta deseori in cafenea?",
            choice1:"Phoebe",
            choice2:"Chandler",
            choice3:"Joey",
            choice4:"Emma",
            answer: 1
        },
        {
            question: "Ce meserie avea Joey?",
            choice1:"Bucatar",
            choice2:"Doctor",
            choice3:"Muzician",
            choice4:"Actor",
            answer: 4
        },
        {
            question: "Cum se numea celebra cafenea din serial?",
            choice1:"Central Perk",
            choice2:"New York Coffee",
            choice3:"Coffe House",
            choice4:"Starbucks",
            answer: 1
        },
        {
            question: "Cine locuieste cu Monica la inceputul serialului?",
            choice1:"Chandler",
            choice2:"Janice",
            choice3:"Rachel",
            choice4:"Phoebe",
            answer: 3
        },
        {
            question: "Cine a avut cele mai multe divorturi?",
            choice1:"Gunther",
            choice2:"Rachel",
            choice3:"Ross",
            choice4:"Joey",
            answer: 3
        },
        {
            question: "Ce cuplu din personajele principale au avut o fetita impreuna?",
            choice1:"Chandler si Monica",
            choice2:"Joey si Rachel",
            choice3:"Ross si Rachel",
            choice4:"Ross si Phoebe",
            answer: 3
        },
        {
            question: "Cine este fosta iubita a lui Chandler?",
            choice1:"Rachel",
            choice2:"Janice",
            choice3:"Phoebe",
            choice4:"Regina",
            answer: 2
        },
        {
            question: "Cine este sora lui Phoebe?",
            choice1:"Martha",
            choice2:"Ruth",
            choice3:"Monica",
            choice4:"Ursula",
            answer: 4
        },
        {
            question: "Cine este Ben?",
            choice1:"Fratele lui Joey",
            choice2:"Fiul lui Ross",
            choice3:"Primul iubit al Monicai",
            choice4:"Fostul iubit al lui Rachel",
            answer: 2
        }   
];


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startGame();