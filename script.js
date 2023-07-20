let question = {
    questionText: "Which is a JavaScript package management application?",
    questionAnswers: {
        a: "Node.js",
        b: "Typescript",
        c: "Npm",
    },
    correctAnswer: "c",
    checkAnswer: function(answer){
        return answer === this.correctAnswer;
    }
}

console.log(question.questionText);
console.log(question.checkAnswer("c"));