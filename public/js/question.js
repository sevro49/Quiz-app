let questions = [
    new Question("1-Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget"}, "c"),
    new Question("2-Which cannot be evaluated in frontend scope?", { a: "Css", b: "HTML", c: "JavaScript", d: "sql"}, "d"),
    new Question("3-Which cannot be evaluated in backend scope", { a: "Node.js", b: "Typescript", c: "Angular", d: "React"}, "a"),
    new Question("4-Which does not use the javascript programming language", { a: "React", b: "Angular", c: "vuejs", d: "asp.net"}, "d")
]

function Question(questionText, questionAnswers, correctAnswer) {
    this.questionText = questionText;
    this.questionAnswers = questionAnswers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.correctAnswer;
}