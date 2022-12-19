///// TABLEAU DES POSSIBILITES
const morpion = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]]
                

///// CONDITIONS DE VICTOIRE
function victory() {
    morpion.forEach(possibility => {
        if (possibility[0] !== "" && possibility[1] !== "" && possibility[2] !== "") {
            if (possibility[0] === possibility[1] && possibility[0] === possibility[2]) {
            alert('Vous avez gagné');
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
    
    let turn = document.getElementById('turn');
    turn = 0
    // turn.innerHTML = 'Tours :';
    
    
    ///// INTERAGIR AVEC 'X' et 'O'
    const allCases = (e) => {
        if (turn === 0) {
            e.innerHTML = `<p>╳</p>`;
            turn++
        } else if (turn >= 1) {
            e.innerHTML = `<p>◯</p>`;
            turn--
        }
        victory();
    }
    
    cases.forEach(function(item){
        item.addEventListener("click", () => allCases(item))
    })
});
