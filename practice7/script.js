/*
У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный. 
В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace.
Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов.
Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный
в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

Если иметь в виду побочные эффекты и чистые функции из предыдущей главы,
какой из вариантов вам кажется более полезным? Какой более эффективным?
*/

reverseArray = function (array){
    var myarray = [];
    for (var i = array.length; i > 0; i--){
        myarray.push(array.pop());
    }
    return myarray;
  };
  
  reverseArrayInPlace = function (array){
    var myarray = [];
    for (var i = array.length; i > 0; i--){
        myarray.push(array.pop());
    }
    for (var j = myarray.length; j > 0; j--){
      array.unshift(myarray.pop());  
    }
    return array;
  };
  
  
  console.log(reverseArray(["A", "B", "C"]));
  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  