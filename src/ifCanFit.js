function ifCanFit(element, length, shipArray) {
    let x = Number(element.className.slice(2, 3));
    let y = Number(element.className.slice(6, 7));

    let answer;
    // if (shipArray.length != 0) {
    //     for (let i = 0; i < shipArray.length; i++) {
    //         if (y === shipArray[i].yCord) {
    //             for (let k = 0; k <= length; k++) {
    //                 if (x === shipArray[i].xCord[0]) return false;
    //                 x++;
    //             }
    //         }
    //     }
    // }

    if (shipArray.length != 0) {
        shipArray.forEach(ship => {
            if (y === ship.yCord) {
                for (let i = 0; i < length; i++) {
                    // console.log(ship.xCord.includes(x + i));
                    if (ship.xCord.includes(x + i)) answer = false;
                }
            }
        });
    }


    if (x < (10 - length)) answer = true
    else answer = false;
    console.log(answer);
    return answer;
}

export default ifCanFit