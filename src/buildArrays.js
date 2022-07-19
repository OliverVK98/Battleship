function buildArrays(array1, array2) {

    for (let i = 0; i < 10; i++) {
        let rowArrP = [];
        let rowArrAI = [];
        for (let k = 0; k < 10; k++) {
            let newDivP = document.createElement('div');
            gameBoard.appendChild(newDivP);
            newDivP.classList.add(`px${k}`);
            newDivP.classList.add(`py${i}`);
            newDivP.classList.add('pDiv');
            rowArrP.push(newDivP);
        }

        for (let l = 0; l < 10; l++) {
            let newDivAI = document.createElement('div');
            gameBoardAI.appendChild(newDivAI);
            newDivAI.classList.add(`ax${l}`);
            newDivAI.classList.add(`ay${i}`);
            newDivAI.classList.add('aiDiv');
            rowArrAI.push(newDivAI);
        }

        array1.push(rowArrP);
        array2.push(rowArrAI);
    }
}

export default buildArrays