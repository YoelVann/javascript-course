// @ Author: Joel Isaac Hoil Calderón, August 2021.

/* 
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
    el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
    pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

26) Programa una función que dado un arreglo de números obtenga el promedio, 
    pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
//  24
sortNumberList = (numberArray = []) => {

    if (numberArray === []) return console.warn("you must to input an Array");
    if (!(numberArray instanceof Array)) return console.warn("The input is not an Array");

    for (let index = 0; index < numberArray.length; index++) {
        if (typeof numberArray[index] !== 'number') return console.warn("Some element in the array is not a number");
    }

    const arr1 = [...numberArray];
    const arr2 = [...numberArray];

    const sortAsc = arr1.sort((a, b) => a - b);
    const sortDes = arr2.sort((a, b) => b - a);

    const sortedObj = {
        sortAsc,
        sortDes
    }

    console.log(sortedObj);

}

// 25
function deleteDuplicateElement(array = []) {
    if (!(array instanceof Array)) return console.warn("The input is not an Array");
    return array.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });

}

//26
function average(numberArray = []) {

    if (numberArray === []) return console.warn("you must to input an Array");
    if (!(numberArray instanceof Array)) return console.warn("The input is not an Array");

    for (let index = 0; index < numberArray.length; index++) {
        if (typeof numberArray[index] !== 'number') return console.warn("Some element in the array is not a number");
    }

    // ** old solution **
    // let load = 0;

    // for (let index = 0; index < numberArray.length; index++) {
    //     load = load + numberArray[index];
    // }

    // const avg = load / numberArray.length;
    // console.log(`the average of [${ numberArray }] is ${ avg }`);
    // **

    // new solution ESC6 to up **
    return console.info(
        numberArray.reduce((total, num, index, arr) => {
            total += num;
            if (index === arr.length - 1) {
                return `el promedio de ${ arr.join(" + ")} es ${ total / arr.length}`
            } else {
                return total;
            }
        })
    );
    // new solution ESC6 to up **
}

sortNumberList([1, 9, 8, 7, 10000, 30, -10]);

a = deleteDuplicateElement([9, true, "x", true, "x", "x", 9, false]);
console.log(a);

average([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);