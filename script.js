// liste de questions et les reponces
const ListQuestions = [
    {
        question: "Qui a créé le langage JavaScript et en quelle année ?",
        reponces: [
            {texte: "Tim Berners-Lee", estCorrect : true},
            {texte: "Brendan Eich", estCorrect : false},
            {texte: "Bill Gates", estCorrect : false} 
        ],
        selectedReponce: null,
    },
    {
        question: "Que représente ECMAScript ?",
        reponces: [
            {texte: "Un navigateur web", estCorrect : false},
            {texte: "Un langage complètement différent de JavaScript", estCorrect : false},
            {texte: "Une spécification standard sur laquelle JavaScript est basé", estCorrect : true}
        ],
        selectedReponce: null,
    },
    {
        question: "Quelle organisation gère la norme ECMAScript ?",
        reponces: [
            {texte: "W3C", estCorrect : false},
            {texte: "Mozilla Foundation", estCorrect : false},
            {texte: "ECMA International", estCorrect : true}
        ],
        selectedReponce: null,
    },
    {
        question: "Quel comité décide des nouveautés du langage JavaScript ?",
        reponces: [
            {texte: "TC39", estCorrect : true},
            {texte: "ECMA39", estCorrect : false},
            {texte: "TC30", estCorrect : false}
        ],
        selectedReponce: null,
    },
    {
        question: "Que signifie « ES6 » ?",
        reponces: [
            {texte: "Un moteur JavaScript de Microsoft", estCorrect : false},
            {texte: "La sixième édition d'ECMAScript, sortie en 2015", estCorrect : true},
            {texte: "Un outil de débogage", estCorrect : false}
        ],
        selectedReponce: null,
    }
];

const bntDebut = document.getElementById("startBnt");
const questionElm = document.getElementById("question");
const btnReponses = document.querySelectorAll(".btn");
const btnSuivant = document.getElementById("suivantBtn");
// const reponse = document.getElementById("reponse");
const precedentBtn = document.getElementById("precedentBtn");
const cardQuiz = document.getElementById("cardQuiz");
const quiter = document.getElementById("quiter");
let questionNum = document.getElementById("questionNum");

let questionIndex =0;
let score =  0;

//  debut passser de commencer au cart de quiz

quiter.addEventListener("click", sortQuiz);
function sortQuiz(){
    cardQuiz.style.display="none";
    heroStart.style.display= "flex";
}


bntDebut.addEventListener("click", commencerQuiz);
function commencerQuiz(){
    heroStart.style.display= "none";
    cardQuiz.style.display="flex";
}
//  fin passser de commencer au cart de quiz

// function ajouterQuestion(){
//     const questionCourant = ListQuestions[questionIndex];
//     let questionNum = document.getElementById("questionNum");
//     questionNum.innerText = questionIndex+1;
//     questionCourant.reponces.forEach((reponce,index) => {
//         // console.log(reponce.estCorrect);
//         questionElm.innerText = questionCourant.question;
//         btnReponses[index].innerText = reponce.texte;
//         // console.log(btnReponses[index].dataset.estCorrect);
//         btnReponses[index].dataset.estCorrect = reponce.estCorrect;
//         console.log(index ,btnReponses[index].dataset.estCorrect);  
//         btnReponses[index].classList.remove("correct", "incorrect");
//         btnReponses[index].disabled = false;
//         // btnReponses[index].addEventListener("click", selectedReponce);
//         console.log(btnReponses[index]);
//         btnReponses[index].onclick = selectedReponce;
//     });
// }

// function selectedReponce (event){
//     const selectBtn = event.target;
//     const eCorrect = selectBtn.dataset.estCorrect= "true";
//     if(eCorrect){
//         selectBtn.classList.add("correct");
//         console.log(selectBtn);
//     }
//     else{
//         selectBtn.classList.add("incorrect");
//         console.log(selectBtn);

//     }
//     Array.from(btnReponses.children).forEach(button => {
//         if(button.dataset.estCorrect === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true
//         });
//         btnSuivant.style.display = "block";
// }
function ajouterQuestion() {
    const questionCourant = ListQuestions[questionIndex];
    questionElm.innerText = questionCourant.question;
    questionNum.innerText = questionIndex+1;

    questionCourant.reponces.forEach((reponse, i) => {
        const btn = btnReponses[i];
        btn.innerText = reponse.texte;
        btn.dataset.correct = reponse.estCorrect;
        btn.classList.remove("correct", "incorrect");
        btn.disabled = false;
        btn.onclick = selectedReponce;
    });

    }

function selectedReponce(e) {
    const clickedBtn = e.target;
    const estCorrect = clickedBtn.dataset.correct === "true";

    btnReponses.forEach(btn => {
        if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
        } else {
        btn.classList.add("incorrect");
        }
        btn.disabled = true;
    });

    if (estCorrect) 
        score++;
    }

btnSuivant.addEventListener("click", SuivantQuestion);
function SuivantQuestion(){
    if(questionIndex+1 < ListQuestions.length){
        questionIndex++;
        precedentBtn.style.visibility ="visible";
        ajouterQuestion();
    }
    else{
        btnSuivant.innerHTML="Terminer";
        alert(`Quiz terminé ! Score : ${score}/${ListQuestions.length}`);
    }
}

precedentBtn.addEventListener("click", precedentQuestion);
function precedentQuestion(){
    if(questionIndex >=1){
        if(questionIndex < ListQuestions.length){
            questionIndex--;
            ajouterQuestion();
        }
    }
    else{
        precedentBtn.style.visibility ="hidden";
    }
}

ajouterQuestion();


