function ifCanFit(event, length, shipArray) {
    let x = Number(event.target.className.slice(2, 3));
    let y = Number(event.target.className.slice(6, 7));

    if (shipArray.length != 0) {
        for (let i = 0; i < shipArray.length; i++) {
            if (y === shipArray[i].yCord) {
                for (let k = 0; k < length; k++) {
                    if (x === shipArray[i].xCord[0]) return false;
                    x++;
                }
            }
        }
    }

    if (x <= (10 - length)) return true;
    return false;
}

export default ifCanFit