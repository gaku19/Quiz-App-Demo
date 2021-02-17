const quizData = [
    {
        question: "How old am I?",
        a: "10",
        b: "19",
        c: "23", 
        d: "110",
        correct: "c"
    }, {
        question: "What is the most used programming language in 2021", 
        a: "Python", 
        b: "Javasctipt", 
        c: "C", 
        d: "Other",
        correct: "b"
    }, {
        question: "What does HTML stand for?", 
        a: "Hypertext Markup Language", 
        b: "Hydrotext Markup Language", 
        c: "Hydrogen Markup language",
        d: "Hypotext Markup Language",
        correct: "a"
    }
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deSelect();

    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    
    return answer;
}


submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();
    console.log(getSelected());

    if (answer) {
        
        if (answer === quizData[currentQuestion].correct) {
            score++;
            console.log(score);
        }

        currentQuestion++;

        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score} / ${quizData.length}</h2>
            <button class="reload" onclick="location.reload()">Reload</button>`
        }
    }
})

function deSelect () {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

