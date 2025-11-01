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
            {texte: "Un outil de débogage", estCorrect : true}
        ],
        selectedReponce: null,
    }
];

const bntDebut = document.getElementById("startBnt");
const questionElm = document.getElementById("question");
const btnReponses = document.querySelectorAll(".btn");
const btnSuivant = document.getElementById("suivantBtn");
const reponse = document.getElementById("reponse");

let questionIndex =0;
let score =  0;

//  debut passser de commencer au cart de quiz
const cardQuiz = document.getElementById("cardQuiz");
const quiter = document.getElementById("quiter");
quiter.addEventListener("click", function sortQuiz(){
    cardQuiz.style.display="none";
    heroStart.style.display= "flex";
});

bntDebut.addEventListener("click", function commencerQuiz(){
    heroStart.style.display= "none";
    cardQuiz.style.display="flex";
});
//  fin passser de commencer au cart de quiz

function ajouterQuestion(){
    const questionCourant = ListQuestions[questionIndex];
    let questionNum = document.getElementById("questionNum");
    questionNum.innerText = questionIndex+1;
    questionCourant.reponces.forEach((reponce,index) => {
        // console.log(btnReponses[index].dataset.indexR);
        // console.log(btnReponses[index].dataset.indexQ);
        questionElm.innerText = questionCourant.question;
        btnReponses[index].innerText = reponce.texte;
        btnReponses[index].addEventListener("click", selectedReponce);
    });

}
btnSuivant.addEventListener("click", function(){
    // console.log(ListQuestions.length);
    if(questionIndex+1 < ListQuestions.length){
        questionIndex++;
        const precedentBtn = document.getElementById("precedentBtn");
        precedentBtn.style.visibility ="visible";
        ajouterQuestion();
    }
    else{
        btnSuivant.innerText="Terminer";
    }
});


precedentBtn.addEventListener("click", function(){
    if(questionIndex < ListQuestions.length){
        questionIndex--;
        ajouterQuestion();
    }
});
ajouterQuestion();



