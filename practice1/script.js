/*Треугольник в цикле
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
#
##
###
####
#####
######
#######
*/

var a='';

for (let i = 0; i < 8; i++) {
    a += '#'
    console.log(a);
}
