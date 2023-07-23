const quiz = new Quiz(questions);

// Start quiz
function startQuiz(){
    if(quiz.questions.length != quiz.questionIndex + 1){
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion());
        showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        btnNext.classList.remove("show");
    } else{
        console.log("You have completed Quiz!");
    }
}

// End quiz
function endQuiz(){
    quizBox.classList.remove("active");
    quiz.questionIndex = 0;
}

// Start quiz button
btnStart.addEventListener("click", function(){
    quizBox.classList.add("active");
    showQuestion(quiz.getQuestion());
    showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    btnNext.classList.remove("show");
});

// X button
btnClose.addEventListener("click", endQuiz);

// Next question 
btnNext.addEventListener("click", startQuiz);

// to mark selected options according to their correctness
function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if(question.checkAnswer(answer)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    // to select only 1 option. And also pointer-event: none
    for(let i = 0; i < optionList.children.length; i++){
        optionList.children[i].classList.add("disabled");
    }

    btnNext.classList.add("show");
}