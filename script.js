// liste de questions et les reponces
const ListQuestions = [
    {
        question: "Qui a créé le langage JavaScript et en quelle année ?",
        reponces: [
            {texte: "Tim Berners-Lee", estCorrect : true},
            {texte: "Brendan Eich", estCorrect : false},
            {texte: "Bill Gates", estCorrect : false} 
        ]
    },
    {
        question: "Que représente ECMAScript ?",
        reponces: [
            {
                texte: "Un navigateur web", estCorrect : false
            },
            {
                texte: "Un langage complètement différent de JavaScript", estCorrect : false
            },
            {
                texte: "Une spécification standard sur laquelle JavaScript est basé", estCorrect : true
            }
        ]
    },
    {
        question: "Quelle organisation gère la norme ECMAScript ?",
        reponces: [
            {
                texte: "W3C", estCorrect : false
            },
            {
                texte: "Mozilla Foundation", estCorrect : false
            },
            {
                texte: "ECMA International", estCorrect : true
            }
        ]
    },
    {
        question: "Quel comité décide des nouveautés du langage JavaScript ?",
        reponces: [
            {
                texte: "TC39", estCorrect : true
            },
            {
                texte: "ECMA39", estCorrect : false
            },
            {
                texte: "TC30", estCorrect : false
            }
        ]
    },
    {
        question: "Que signifie « ES6 » ?",
        reponces: [
            {
                texte: "Un moteur JavaScript de Microsoft", estCorrect : false
            },
            {
                texte: "La sixième édition d’ECMAScript, sortie en 2015", estCorrect : true
            },
            {
                texte: "Un outil de débogage", estCorrect : true
            }
        ]
    }
];
// console.log(ListQuestions[0].question)

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
quiter.addEventListener("click", function (){
    cardQuiz.style.display="none";
    heroStart.style.display= "flex";
});

bntDebut.addEventListener("click", function (){
    heroStart.style.display= "none";
    cardQuiz.style.display="flex";
});
//  fin passser de commencer au cart de quiz

function ajouterQuestion(){
    const questionCourant = ListQuestions[questionIndex];
    let questionNum = document.getElementById("questionNum");
    questionNum.innerText = questionIndex + 1;
    questionCourant.reponces.forEach((reponce,index) => {
        questionElm.innerText = questionCourant.question
        btnReponses[index].innerText = reponce.texte;
        btnReponses[index].addEventListener("click", function  selectReponce(){
            if(reponce.estCorrect){
                // reponce.classList.add("correct");
                btnReponses[index].style.disabled = true;
            }
            else{
                // reponce.classList.add("incorrect");
                btnReponses[index].style.disabled = false;

            }
    });
});
}

btnSuivant.addEventListener("click", function(){
    questionIndex++;
    const precedentBtn = document.getElementById("precedentBtn");
    precedentBtn.style.visibility ="visible";
    ajouterQuestion();
});
ajouterQuestion();
function selectReponce(){
    // console.log(questionCourant.reponces)
}
selectReponce()


