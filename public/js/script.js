const btnStart = document.querySelector(".btn_start");
const quizBox = document.querySelector(".quiz_box");
const btnClose = document.querySelector(".btn_close")
const questionText = document.querySelector(".question_text");
const optionList = document.querySelector(".option_list");
const btnNext = document.querySelector(".next_btn");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


function Question(questionText, questionAnswers, correctAnswer) {
    this.questionText = questionText;
    this.questionAnswers = questionAnswers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.correctAnswer;
}

let questions = [
    new Question("1-Which is a JavaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Question("2-Which is a avaScript package management application?", { a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
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

// Start quiz
function startQuiz(){
    if(quiz.questions.length != quiz.questionIndex + 1){
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion());
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
    btnNext.classList.remove("show");
});

// X button
btnClose.addEventListener("click", endQuiz);

// Next question 
btnNext.addEventListener("click", startQuiz);


// Show question
function showQuestion(question){
    let q = `<span>${question.questionText}</span>`;
    let options = '';

    // show options
    for(let answer in question.questionAnswers){
        options += 
            `
                <div class="option">
                    <span><b>${answer}</b>: ${question.questionAnswers[answer]}</span>
                </div>
            `;
    }   

    questionText.innerHTML = q;
    optionList.innerHTML = options;
    
    // list of all options in one question
    const option = optionList.querySelectorAll(".option");

    // select clicked option
    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

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
