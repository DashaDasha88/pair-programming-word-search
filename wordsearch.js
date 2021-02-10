const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    
    const colLength = letters.length;
    const rowLength = letters[0].length;
    let found = false;

    for (let col = 0; col < rowLength; col++){
        let tempArray = [];

        for (let row = 0; row < colLength; row++){
            tempArray.push(letters[row][col]);
            
        }
        const verticalJoin = tempArray.join('')
        if (verticalJoin.includes(word)) {
            found = true;
        }
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
        found = true;
        }
    }
    return found;
}

console.log(wordSearch(arr, word));

module.exports = wordSearch