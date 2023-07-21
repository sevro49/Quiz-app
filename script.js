// let question = {
//     questionText: "Which is a JavaScript package management application?",
//     questionAnswers: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm",
//     },
//     correctAnswer: "c",
//     checkAnswer: function(answer){
//         return answer === this.correctAnswer;
//     }
// }

function Question(questionText, questionAnswers, correctAnswer) {
    this.questionText = questionText;
    this.questionAnswers = questionAnswers;
    this.correctAnswer = correctAnswer;

    // represents every object created from Question
    console.log(this);
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.correctAnswer;
}

let question1 = new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c");
let question2 = new Question("Which is a .Net package management application?", { a: "Node.js", b: "nuget", c: "Npm"}, "b");

let questions = [
    new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c")
]

console.log(question1.checkAnswer("c"));

