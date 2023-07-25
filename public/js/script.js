const quiz = new Quiz(questions);
let counter;
let counterLine;


// Start quiz
function startQuiz(){
    if(quiz.questions.length != quiz.questionIndex + 1){
        quiz.questionIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        showQuestion(quiz.getQuestion());
        showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        btnNext.classList.remove("show");
    } else{
        console.log("You have completed Quiz!");
        clearInterval(counter);
        clearInterval(counterLine);
        scoreBox.classList.add("active");
        quizBox.classList.remove("active");
        showScore(quiz.questions.length, quiz.numberOfCorrectAnswers);
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
    startTimer(10);
    startTimerLine();
    showQuestion(quiz.getQuestion());
    showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    btnNext.classList.remove("show");
});

// X button
btnClose.addEventListener("click", endQuiz);

// Next question 
btnNext.addEventListener("click", startQuiz);

// Quit button
btnQuit.addEventListener("click", function(){
    window.location.reload();
});

// Replay button
btnReplay.addEventListener("click", function(){
    quiz.questionIndex = 0;
    quiz.numberOfCorrectAnswers = 0;
    btnStart.click();
    scoreBox.classList.remove("active");
});

// to mark selected options according to their correctness
function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if(question.checkAnswer(answer)){
        quiz.numberOfCorrectAnswers += 1;
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

// Starts timer
function startTimer(time){
    
    counter = setInterval(timer, 1000);

    function timer(){
        timeSecond.textContent = time;
        time--;

        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time is out";
            let answer = quiz.getQuestion().correctAnswer;

            for(let option of optionList.children){
                if(option.querySelector("span b").textContent == answer){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", correctIcon);
                }
                option.classList.add("disabled");
            }
            
            btnNext.classList.add("show");
        }
    }
}

// Time line function
function startTimerLine(){
    let lineWidth = 0;

    counterLine = setInterval(timer, 20);

    function timer(){
        lineWidth += 1;
        timeLine.style.width = lineWidth + "px";

        if(lineWidth > 548){
            clearInterval(counterLine);
        }
    }
}