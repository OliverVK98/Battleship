function getClass(element) {
    const classArr = element.className;
    for (let i = 0; i < classArr.length; i++) {
        if (classArr[i] != NaN) return classArr[i];
    }
}

export default getClass