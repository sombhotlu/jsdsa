


function NBitBinary(n) {
    let result = getResult([], '1', 0, 1, n)
    return result.join(' ')
}


function getResult(arr, currentString, countOf0s, countOf1s, n) {
    if (currentString.length === n) {
        arr.push(currentString)
        return arr
    }
    
    getResult(arr, currentString + '1', countOf0s, countOf1s + 1, n)

    if (countOf1s > countOf0s) {
        getResult(arr, currentString + '0', countOf0s + 1, countOf1s, n)
    }

    return arr

}

console.log(NBitBinary(2))
/* 
function will take arr, no. of 1 and no. of zeros
*/

