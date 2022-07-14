import compareArr from "./compareArr";

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
        console.log(gameBoard);
        for (let i = 0; i < this.xCord.length; i++) {
            gameBoardArr[this.yCord][this.xCord[i]].classList.add('ship');
        }
        for (let i = 0; i < this.xCordHit.length; i++) {
            gameBoardArr[this.yCord][this.xCordHit[i]].classList.add('shipHit');
        }
    }
}

export default Ship