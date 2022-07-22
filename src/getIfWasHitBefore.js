function getIfWasHitBefore(element) {
    const classString = element.className;
    if (classString.includes('shipHit') || classString.includes('missHit')) return true;
    else return false;
}

export default getIfWasHitBefore