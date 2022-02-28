/*Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую 
массив, который содержит все числа из него, включая начальное и конечное.
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.*/

range = function(a, b, step) {
    if (!step) step = 1;
    var range = [];
    if (a < b) {
        for (var i = a; i <= b; i += step)
            range.push(i);
    } else {
        for (var i = a; i >= b; i += step)
            range.push(i);
    }
    return range;
};

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });
}
