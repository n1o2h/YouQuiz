// function commencerQuiz(){
//     questionIndex = 0;
//     score = 0;
//     btnSuivant.innerHTML = "ivant";
//     afficherQuiz();
// 
// function afficherQuiz(){
//     let questionCourant = ListQuestions[questionIndex];
//     questionElm.innerHTML = questionCourant.question;
//     questionCourant.reponces.forEach(reponce => {
//         const button = document.createElement("button");
//         button.innerHTML = reponce.texte;
//         button.classList.add("btn");
//         if(reponce.estCorrect){
//             button.dataset.estCorrect=reponce.estCorrect;
//         }
//         button.addEventListener("click", selectReponce);
//         btnReponses.appendChild(button); 
//     });
// };