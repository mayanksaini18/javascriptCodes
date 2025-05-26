function sum(index1, index2) {
    return index1 + index2;
}

function multiply(index1, index2) {
    return index1 * index2;
}

function divide(index1, index2) {
    return index1 / index2;
}

function doArithmetic(firstEl, secondEl, arithmeticFn) {
    return arithmeticFn(firstEl, secondEl);
}

var answer = doArithmetic(1, 2, sum);
console.log(answer);



/**
 * Heap:
- sum -> function(a, b) { return a + b }
- doArithmetic -> function(x, y, fn) { return fn(x, y) }

Call Stack:
1. main() or global()
2. doArithmetic(2, 3, sum)
3. sum(2, 3)

 */
