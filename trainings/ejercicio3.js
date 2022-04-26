function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const random = getRandomArbitrary(500, 600);
console.log(random);

const capicua = ((numero = 0) => {
    if (!numero) console.warn("debe de ingresar un número");

    const numeroStr = numero.toString().split("").reverse().join("");
    console.log(numeroStr);
    console.log(numero.toString());

    let capicua = false;
    if (numero.toString() === numeroStr) {
        capicua = true;
    }

    console.log(`el numero ${numero} es capicua?`, capicua);
})

const factorial = ((numero = 0) => {
    if (numero < 0) {
        console.warn("el número debe ser entero positivo mayor o igual a 0");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log("factorial de " + numero + " es", factorial);
})
capicua(20022);

factorial(-3);