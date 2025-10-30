// liste de questions et les reponces
const ListQuestions = [
    {
        question: "Qui a créé le langage JavaScript et en quelle année ?",
        reponces: [
            {texte: "Tim Berners-Lee", estCorrect : true},
            {texte: "Brendan Eich", estCorrect : false},
            {texte: "Bill Gates", estCorrect : true} 
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

// 
const bntDebut = document.getElementById("startBnt");
console.log(bntDebut)

const questionElm = document.getElementById("question");
const reponseElem = document.getElementById("reponse");
const btnSuivant = document.getElementById("suivant-btn");
let heroStart = document.getElementById("hero-start");

let questionIndex =0;
let score =  0;

// bntDebut.addEventListener("click", commencerQuiz());
// function  commencerQuiz(){
//     heroStart.style.display= "none";
// }
