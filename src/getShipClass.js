function getShipClass(element) {
    const classString = element.className;
    if (classString.includes('ship')) return true;
    else return false;
}

export default getShipClass