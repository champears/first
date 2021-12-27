/*Минимум
Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
*/

var min = function(a, b) {
    if (a > b) return (b); 
    else if (a < b) return (a);
    else if (a === b) return ("Вы ввели два одинаковых числа");
}