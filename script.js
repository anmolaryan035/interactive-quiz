const questions = [
    {
        question: "What is the capital of france?",
        answers: [
            {text: "Paris", correct: true },
            {text: "London", correct: false },
            {text: "berlin", correct: false },
            {text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which language is use for web development?",
        answers: [
            {text: "python", correct: false },
            {text: "java", correct: false },
            {text: "javascript", correct: true },
            {text: "C++", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "Hyper transfer markup language", correct: false },
            {text: "Hyper text markup language", correct: true },
            {text: "Hyper text machine learning", correct: false },
            {text: "Hyper tool multi language", correct: false }
        ]
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-btn");

const nextButton = document.getElementById("next-btn");

const scoreContainer = document.getElementById("score-container");

const scoreElement = document.getElementById("score");

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;

nextButton.classList.add("hide");
scoreContainer.classList.add("hide");

showQuestion();

}

function showQuestion(){
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    console.log("current question:",currentQuestion);
    if(!currentQuestion){

        console.error("no question found");
        return;
    }

    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(
        answer => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("btn");

            button.addEventListener("click",
                () => selectAnswer(button, answer.correct));
                answerButtons.appendChild(button);
        });
}

function resetState(){
    nextButton.classList.add("hide");
    answerButtons.innerHTML="";
}

function selectAnswer(button,correct){
    if(correct){
        button.classList.add("correct");
        score++;
    }
    else{
        button.classList.add("wrong");
    }

    document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);
    nextButton.classList.remove("hide");
}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
});

function showScore(){
    scoreContainer.classList.remove("hide");
    scoreElement.innerHTML = `${score} / ${questions.length}`;
    nextButton.classList.add("hide");
}
startQuiz();