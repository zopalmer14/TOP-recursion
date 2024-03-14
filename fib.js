
// iterative fibonacci function
function fibs(length) {
    let result = [];
    let first = 0;
    let second = 1;
    for (let i = 0; i < length; i++) {
        result.append(first);
        let tmp = first + second;
        first = second;
        second = tmp;
    }

    return result;
}

// recursive fibonacci function

function fibsRec(length) {
    return recursiveHelper([], 0, 1, length);
}

function recursiveHelper(result, first, second, length) {
    if (length <= 0) {
        return result
    } 

    result.append(first);
    recursiveHelper(result, second, first + second, length - 1);
}

console.log('Iterative result with a length of 8: ' + fibs(8));
console.log('Recursive result with a length of 8: ' + fibsRec(8));