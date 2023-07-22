const btnStart = document.querySelector(".btn_start");
const quizBox = document.querySelector(".quiz_box");
const closeQuiz = document.querySelector(".x_mark")

function Question(questionText, questionAnswers, correctAnswer) {
    this.questionText = questionText;
    this.questionAnswers = questionAnswers;
    this.correctAnswer = correctAnswer;

    // represents every object created from Question
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.correctAnswer;
}

let questions = [
    new Question("1-Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("2-Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("3-Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c")
]

function Quiz(questions){
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(questions);


btnStart.addEventListener("click", function(){
    if(quiz.questions.length != quiz.questionIndex){
        quizBox.classList.add("active");
        console.log(quiz.getQuestion());
        quiz.questionIndex += 1;
    } else{
        console.log("You have completed Quiz!");
    }
})

closeQuiz.addEventListener("click", function(){
    quizBox.classList.remove("active");
    quiz.questionIndex = 0;
})


