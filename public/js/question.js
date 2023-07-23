let questions = [
    new Question("1-Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("2-Which is a avaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("3-Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c")
]

function Question(questionText, questionAnswers, correctAnswer) {
    this.questionText = questionText;
    this.questionAnswers = questionAnswers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.correctAnswer;
}