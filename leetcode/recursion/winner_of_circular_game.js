/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var findTheWinner = function(n, k) {
    let myArr = []
    let currentIndex = 0
    
    for(let i = 1 ; i<= n; i++)
        myArr.push(i)
    
    return solve(myArr, k-1, 0)
};


function solve(arr, k, currentIndex) {
    if(arr.length === 1) 
        return arr[0]
    
     let indexToRemove = (currentIndex + k )  % arr.length
     arr.splice(indexToRemove, 1)
    
    return solve(arr, k, indexToRemove)
}

console.log(findTheWinner(40,7))