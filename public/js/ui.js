const btnStart = document.querySelector(".btn_start");
const quizBox = document.querySelector(".quiz_box");
const btnClose = document.querySelector(".btn_close")
const questionText = document.querySelector(".question_text");
const optionList = document.querySelector(".option_list");
const btnNext = document.querySelector(".next_btn");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
const questionNumber = document.querySelector(".quiz_box .question_index");

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