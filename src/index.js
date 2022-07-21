import '../src/styles.css';
import getClass from "./getElementClass.js";
import getShipClass from './getShipClass';
import compareArr from './compareArr';
import ifCanFit from './ifCanFit';
import buildArrays from './buildArrays';

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

    updateShipAI() {
        for (let i = 0; i < this.xCord.length; i++) {
            gameBoardAIArr[this.yCord][this.xCord[i]].classList.add('ship');
        }
        for (let i = 0; i < this.xCordHit.length; i++) {
            gameBoardAIArr[this.yCord][this.xCordHit[i]].classList.add('shipHit');
        }
    }
}

const gameBoard = document.getElementById('gameBoard');
const gameBoardAI = document.getElementById('gameBoardAI');
const gameBoardArr = [];
const gameBoardAIArr = [];
const playerLengthArr = [5, 4, 4, 3, 3];
const AILengthArr = [5, 4, 4, 3, 3];
const playerShipArray = [];
const AIShipArray = [];

buildArrays(gameBoardArr, gameBoardAIArr);

function buildAIShips() {
    const x = Math.floor(Math.random(0, 1) * 10);
    const y = Math.floor(Math.random(0, 1) * 10);
    if (AILengthArr[0] === undefined) return;

    if (ifCanFit(gameBoardAIArr[y][x], AILengthArr[0], AIShipArray)) {
        const newShip = new Ship(x, y, AILengthArr[0]);
        AIShipArray.push(newShip);
        newShip.updateShipAI();
        AILengthArr.shift();
    }
    buildAIShips();

}
buildAIShips()
console.log(AIShipArray);

// Function that will add ships to the player's board at the beggining of the game, later passed in the EventListener 
const addShips = (event) => {
    if (event.target.style.cursor != 'not-allowed') {
        gameBoard.removeEventListener('mouseover', cursorNotAllowed);
        let x = Number(event.target.className.slice(2, 3));
        let y = Number(event.target.className.slice(6, 7));
        const newShip = new Ship(x, y, playerLengthArr[0]);
        newShip.updateShip();
        playerLengthArr.shift();
        gameBoard.addEventListener('mouseover', cursorNotAllowed);
        playerShipArray.push(newShip);
        if (playerLengthArr[0] === undefined) {
            gameBoard.removeEventListener('click', addShips);
            gameBoard.removeEventListener('mouseover', cursorNotAllowed);
            gameBoardAI.classList.remove('hidden');
        }
    }
}

const cursorNotAllowed = (event) => {
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            gameBoardArr[i][k].style.cursor = 'pointer';
            if (gameBoardArr[i][k].style.backgroundColor != 'beige') gameBoardArr[i][k].style.backgroundColor = 'rgb(211, 213, 211)'
        }
    }

    let x = Number(event.target.className.slice(2, 3));
    let y = Number(event.target.className.slice(6, 7));
    const arrCheck = [];
    let shipCheck = 0;
    let num = 0;

    for (let i = 0; i < playerLengthArr[0]; i++) {
        arrCheck.push(num);
        num++;
    }

    arrCheck.forEach((index) => {
        if (gameBoardArr[y][x + index] === undefined) gameBoardArr[y][x].style.cursor = 'not-allowed';
    })

    if (event.target.style.cursor != 'not-allowed') {
        arrCheck.forEach((index) => {
            if (gameBoardArr[y][x + arrCheck[arrCheck.length - 1]]) {
                if (getShipClass(gameBoardArr[y][x + index])) shipCheck++;
                if (shipCheck > 0) arrCheck.forEach((index) => {
                    if (gameBoardArr[y][x + index]) gameBoardArr[y][x + index].style.cursor = 'not-allowed'
                })
            }
        })
    }

    if (event.target.style.cursor != 'not-allowed') {
        arrCheck.forEach((index) => {
            if (gameBoardArr[y][x + index]) gameBoardArr[y][x + index].style.backgroundColor = 'rgb(0,166,147)';
        })
    } else arrCheck.forEach((index) => {
        if (gameBoardArr[y][x + index]) gameBoardArr[y][x + index].style.backgroundColor = 'rgb(230,27,35)';
    })
}

gameBoard.addEventListener('mouseover', cursorNotAllowed);
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