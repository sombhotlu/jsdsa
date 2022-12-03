/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    return permute([], '', s)
};

function permute(arr, currentString, remainingString) {

    if (!remainingString) {
        arr.push(currentString)    
        return 
    }
 
    let firstChar = remainingString[0]
    let rest = remainingString.slice(1) 
    
    if (!isNaN(Number(firstChar)))
        permute(arr, currentString + firstChar, rest)    
    else {
        permute(arr, currentString + firstChar.toLowerCase(), rest)
        permute(arr, currentString + firstChar.toUpperCase(), rest)
    }
    
    return arr
}

console.log(letterCasePermutation('a1b2'));
