// @ Author: Joel Isaac Hoil Calderón, August 2021.

arrayPower = (arrayNum = []) => {

    if (arrayNum === []) return console.warn("you must to input an Array");
    if (!(arrayNum instanceof Array)) return console.warn("The input is not an Array");
    let arrayPow = [];
    let valid = true;

    arrayNum.forEach(num => {
        if (typeof num !== 'number') {
            console.warn(`The element ${ num } in the input array is not a number`);
            valid = false;
            return;
        };
        arrayPow.push(Math.pow(num, 2));
    });
    if (valid) console.log(`[${arrayNum}]^2 = [${arrayPow}]`);
};

minMax = (arrayNum = []) => {

    if (arrayNum === []) return console.warn("you must to input an Array");
    if (!(arrayNum instanceof Array)) return console.warn("The input is not an Array");

    for (let index = 0; index < arrayNum.length; index++) {
        if (typeof arrayNum[index] !== 'number') return console.warn("Some element in the array is not a number");
    }

    let minMaxArray = [0, 0];

    minMaxArray[0] = Math.max(...arrayNum);
    minMaxArray[1] = Math.min(...arrayNum);

    console.log(minMaxArray);
}

parImpar = (arrayNum = []) => {
    if (arrayNum === []) return console.warn("you must to input an Array");
    if (!(arrayNum instanceof Array)) return console.warn("The input is not an Array");

    for (let index = 0; index < arrayNum.length; index++) {
        if (typeof arrayNum[index] !== 'number') return console.warn("Some element in the array is not a number");
    }
    let pares = [];
    let impares = [];
    let results = {
        pares,
        impares
    };

    for (let index = 0; index < arrayNum.length; index++) {
        if ((arrayNum[index] % 2) === 0) { // number is par
            pares.push(arrayNum[index]);
        } else { // number is not a par
            impares.push(arrayNum[index]);
        }
    }

    console.log(results);
}

arrayPower([1, 2, 3]);
minMax([-1, 2, 2, 100]);
parImpar([1, 2, 3, 4, 5, 6, 7, 8, 9]);