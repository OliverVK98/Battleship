function ifCanFit(event, length) {
    let x = Number(event.target.className.slice(2, 3));
    if (x <= (10 - length)) return true;
    return false;
}

export default ifCanFit