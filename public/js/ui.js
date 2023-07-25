const quizBox = document.querySelector(".quiz_box");
const scoreBox = document.querySelector(".score_box");
const btnStart = document.querySelector(".btn_start");
const btnClose = document.querySelector(".btn_close")
const btnNext = document.querySelector(".next_btn");
const btnReplay = document.querySelector(".btn_replay");
const btnQuit = document.querySelector(".btn_quit");
const questionText = document.querySelector(".question_text");
const optionList = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
const questionNumber = document.querySelector(".quiz_box .question_index");
const scoreText = document.querySelector(".score_box .score_text");
const timeText = document.querySelector(".time_text");
const timeSecond = document.querySelector(".time_second");
const timeLine = document.querySelector(".time_line");


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

// Shows question number
function showQuestionNumber(questionOrder, totalQuestions){
    let tag = `<span class="badge bg-warning text-dark">${questionOrder} / ${totalQuestions}</span>`;
    questionNumber.innerHTML = tag;
}

// Shows score end of the quiz
function showScore(totalQuestions, correctAnswer){
    let tag = `You gave ${correctAnswer} correct answers out of ${totalQuestions} questions in total.`;
    scoreText.innerHTML = tag;
}