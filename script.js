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
    this.checkAnswer = function(answer){
        return answer === this.correctAnswer;
    }
}

let question1 = new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c");
let question2 = new Question("Which is a .Net package management application?", { a: "Node.js", b: "nuget", c: "Npm"}, "b");

let questions = [
    new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c")
]

console.log(question1.questionText);
console.log(question1.questionAnswers);
console.log(question1.correctAnswer);
console.log(question1.checkAnswer("c"))

console.log(question2.questionText);
console.log(question2.questionAnswers);
console.log(question2.correctAnswer);

console.log(questions[0].questionText);
console.log(questions[0].questionAnswers);
console.log(questions[0].correctAnswer);

for(let q of questions){
    console.log(q.questionText);
}