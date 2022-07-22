function checkWinner(array1, array2) {
    let playerShipsSunk = 0;
    let AIShipsSunk = 0;

    array1.forEach(ship => {
        if (ship.sunk === true) playerShipsSunk++;
    });

    if (playerShipsSunk === 5) return true;

    array2.forEach(ship => {
        if (ship.sunk === true) AIShipsSunk++;

    });

    if (AIShipsSunk === 5) return true;
}

export default checkWinner