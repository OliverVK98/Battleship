import Ship from "./ship";
import '../src/styles.css';
import getClass from "./getElementClass";


const gameBoard = document.getElementById('gameBoard');
const gameBoardArr = [];

for (let i = 0; i < 10; i++) {
    let rowArr = [];
    for (let k = 0; k < 10; k++) {
        let newButton = document.createElement('button');
        gameBoard.appendChild(newButton);
        newButton.classList.add(k);
        newButton.id = i;
        rowArr.push(newButton);
    }
    gameBoardArr.push(rowArr);
}



const testShip = new Ship(3, 5, 4);
testShip.updateShip();

gameBoard.addEventListener('click', (e) => {
    testShip.isHit(getClass(e.target), e.target.id);
    testShip.updateShip();
})