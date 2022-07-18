import '../src/styles.css';
import getClass from "./getElementClass.js";
import getShipClass from './getShipClass';
import compareArr from './compareArr';
import ifCanFit from './ifCanFit';

class Ship {
    constructor(x, y, length) {
        this.xCord = this.setCord(x, length);
        this.xCordHit = [];
        this.sunk = false;
        this.yCord = y;
    }

    setCord(xCord, length) {
        let xArr = [];
        for (let i = 0; i < length; i++) {
            xArr.push(xCord + i);
        }
        return xArr;
    }

    isHit(x, y) {
        if (y === this.yCord) {
            if (this.xCord.includes(x)) this.xCordHit.push(x);
            this.isSunk();
            return true;
        }
    }

    isSunk() {
        if (compareArr(this.xCord, this.xCordHit)) {
            this.sunk = true;
        }
    }

    updateShip() {
        for (let i = 0; i < this.xCord.length; i++) {
            gameBoardArr[this.yCord][this.xCord[i]].classList.add('ship');
        }
        for (let i = 0; i < this.xCordHit.length; i++) {
            gameBoardArr[this.yCord][this.xCordHit[i]].classList.add('shipHit');
        }
    }
}

const gameBoard = document.getElementById('gameBoard');
const gameBoardAI = document.getElementById('gameBoardAI');
const gameBoardArr = [];
const gameBoardAIArr = [];
const playerLengthArr = [5, 4, 4, 3, 3];
const playerShipArray = [];
const AIShipArray = [];

for (let i = 0; i < 10; i++) {
    let rowArr = [];
    for (let k = 0; k < 10; k++) {
        let newButton = document.createElement('button');
        gameBoard.appendChild(newButton);
        newButton.classList.add(`px${k}`);
        newButton.classList.add(`py${i}`);
        rowArr.push(newButton);
    }
    gameBoardArr.push(rowArr);
}

for (let i = 0; i < 10; i++) {
    let rowArr = [];
    for (let k = 0; k < 10; k++) {
        let newButton = document.createElement('button');
        gameBoardAI.appendChild(newButton);
        newButton.classList.add(`ax${k}`);
        newButton.classList.add(`ay${k}`);
        rowArr.push(newButton);
    }
    gameBoardAIArr.push(rowArr);
}

//Function that display AI Board after player places his ships
const showAIBoard = () => {
    gameBoardAI.classList.remove('hidden');
}

// Function that will add ships to the player's board at the beggining of the game, later passed in the EventListener 
const addShips = (event) => {
    if (!getShipClass(event.target) && ifCanFit(event, playerLengthArr[0])) {
        let x = Number(event.target.className.slice(2, 3));
        let y = Number(event.target.className.slice(6, 7));
        const testShip = new Ship(x, y, playerLengthArr[0]);
        testShip.updateShip();
        playerLengthArr.shift();
        playerShipArray.push(testShip);
        if (playerLengthArr[0] === undefined) {
            gameBoard.removeEventListener('click', addShips);
            showAIBoard();
        }
    }
}

gameBoard.addEventListener('click', addShips);

// gameBoard.addEventListener('click', (e) => {
//     // playerShipArray.forEach((element) = {
//     //     element.isHit(Number(getClass(e.target)), Number(e.target.id));
//     //     element.updateShip();
//     // })
//     for (let i = 0; i < playerShipArray.length; i++) {
//         playerShipArray[i].isHit(Number(getClass(e.target)), Number(e.target.id));
//         playerShipArray[i].updateShip();
//     }
// })





















// const getButtonP = (x, y) => {
//     let buttonArrR = [];
//     let buttonArr = document.querySelectorAll(`.px${x}`);
//     buttonArr.forEach((element) => {
//         if (element.className.slice(4, 7) === `py${y}`) buttonArrR.push(element);
//     })
//     return buttonArrR[0];
// }

// const arrayRemoveListener = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         for (let k = 0; k < array[i][1].length; k++) {
//             console.log(getButtonP(array[i][1][k], array[i][0]))
//             getButtonP(array[i][1][k], array[i][0]).removeEventListener('click', addShips);
//         };
//     }
// }

// const adjustEventListner = (length) => {
//     for (let i = gameBoardArr.length - length + 1; i < gameBoardArr.length; i++) {
//         for (let k = 0; k < 10; k++) {
//             gameBoardArr[k][i].removeEventListener('click', addShips);
//         }
//     }
// }

// function buildPlayerShip() {
//     for (let i = 0; i < 10; i++) {
//         for (let k = 0; k < 10; k++) {
//             gameBoardArr[i][k].addEventListener('click', addShips);
//         }
//     }
//     adjustEventListner(playerLengthArr[0]);
// }

// buildPlayerShip();