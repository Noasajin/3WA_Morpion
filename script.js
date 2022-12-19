const quizz = [{
        question: 'Pourquoi Dorian est aussi beau ?',
        reponse: ['Il a fait une chirurgie', 'C\'est un don', 'Il a eu de la chance'],
        goodReponse: 'Il a eu de la chance'
    },
    {
        question: 'Pourquoi Isaac est aussi intelligent ?',
        reponse: ['Il est né comme ça', 'On lui a transféré du QI', 'Il s\'est cogné fort contre un mur en étant bébé'],
        goodReponse: 'Il est né comme ça'
    },
    {
        question: 'Pourquoi Théo est aussi drôle ?',
        reponse: ['Il est né comme ça', 'On lui a transféré de l\'humour', 'Il a mangé un clown'],
        goodReponse: 'Il a mangé un clown'
    }
]

let idQuestion = 0
let score = 0


///// FUNCTION CHOOSE QUESTION
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


///// VARIABLE ALEATOIRE QUESTIONS
let isQuestion = randomIntFromInterval(1, 3);


document.addEventListener('DOMContentLoaded', () => {
    const question = document.getElementsByTagName('p');
    const reponseA = document.getElementById('reponseA');
    const reponseB = document.getElementById('reponseB');
    const reponseC = document.getElementById('reponseC');
    let goodReponse = null;


    ///// FUNCTIONS QUESTION - ANSWER
    function showQuestion() {
        question[0].innerText = quizz[idQuestion].question;
        reponseA.innerText = quizz[idQuestion].reponse[0];
        reponseB.innerText = quizz[idQuestion].reponse[1];
        reponseC.innerText = quizz[idQuestion].reponse[2];
        goodReponse = quizz[idQuestion].goodReponse
    }
    
    function onClick(btn) {
        if (btn.innerText === goodReponse) {
            alert('Bien joué !!');
            score++
        } else {
            alert('T\'es trop nul');
            score--
        }   
        
        idQuestion++
        showQuestion()
    }
    
    reponseA.addEventListener('click', () => onClick(reponseA));
    reponseB.addEventListener('click', () => onClick(reponseB));
    reponseC.addEventListener('click', () => onClick(reponseC));
    
    showQuestion()
});
