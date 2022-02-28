function range (start, end) {
    if (isNaN (start) || isNaN (end) || start >= end) return false;
    var a = [], i = 0;
    while (start <= end) {a[i] = start; start++; i++;}
    return a;
}
function sum (arr) {
    return arr.reduce (function (a, b) {return a + b;});
}
console.log(sum (range (10,20)));