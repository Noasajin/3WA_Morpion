///// MORPION
let morpion = ["", "", "", "", "", "", "", "", ""]


///// TABLEAU DES POSSIBILITES
const victory = [
    [1, 2, 3],
    [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]]


let turn = document.getElementById('turn');
    turn = 0
    // turn.innerHTML = 'Tours :';


function isWinner() {
    victory.forEach(casDeVictoire => {
        const indexNb1 = casDeVictoire[0]
        const indexNb2 = casDeVictoire[1]
        const indexNb3 = casDeVictoire[2]

        console.log(morpion[indexNb1],morpion[indexNb2],morpion[indexNb3])
        if (morpion[indexNb1] !== "" && morpion[indexNb2] !== "" && morpion[indexNb3] !== "") {
            if (morpion[indexNb1] === morpion[indexNb2] && morpion[indexNb2] === morpion[indexNb3]) {
                alert('Le gagnant est : ' + morpion[indexNb1]);
            }
        }

    })
    }


document.addEventListener('DOMContentLoaded', () => {
    let caseOne = document.getElementById('1');
    let caseTwo = document.getElementById('2');
    let caseThree = document.getElementById('3');
    let caseFour = document.getElementById('4');
    let caseFive = document.getElementById('5');
    let caseSix = document.getElementById('6');
    let caseSeven = document.getElementById('7');
    let caseEight = document.getElementById('8');
    let caseNine = document.getElementById('9');
    const cases = [caseOne, caseTwo, caseThree, caseFour, caseFive, caseSix, caseSeven, caseEight, caseNine]
    
    
    ///// INTERAGIR AVEC 'X' et 'O'
    const allCases = (e) => {
        const index = e.getAttribute("id")
        if (turn === 0) {
            morpion[index] = '╳';
            e.innerHTML = `<p>╳</p>`;
            turn++
        } else if (turn >= 1) {
            morpion[index] = '◯';
            e.innerHTML = `<p>◯</p>`;
            turn--
        }
        isWinner();
    }
    
    cases.forEach(function(item){
        item.addEventListener("click", () => allCases(item))
    })
});
