function Question(questionText, questionAnswers, correctAnswer) {
    this.questionText = questionText;
    this.questionAnswers = questionAnswers;
    this.correctAnswer = correctAnswer;

    // represents every object created from Question
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.correctAnswer;
}

let question1 = new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c");
let question2 = new Question("Which is a .Net package management application?", { a: "Node.js", b: "nuget", c: "Npm"}, "b");

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


document.querySelector(".btn-start").addEventListener("click", function(){
    if(quiz.questions.length != quiz.questionIndex){
        console.log(quiz.getQuestion());
        quiz.questionIndex += 1;
    } else{
        console.log("You have completed Quiz!");
    }
})


