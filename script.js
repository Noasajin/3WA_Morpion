const morpion = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]]


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
    
    let turn = document.getElementById('turn');
    turn = 0
    turn.innerHTML = 'Tours :';
    
    caseOne.addEventListener("click", () => {
        if (turn === 0) {
            caseOne.innerHTML = `<p>X</p>`;
            turn++
        } else if (turn >= 1) {
            caseOne.innerHTML = `<p>O</p>`;
            turn--
        }
    })
    
});
