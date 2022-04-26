function numPrimo(numeroEntero) {
    if (typeof(numeroEntero) !== 'number') {
        console.error("El valor ingresado no es un número");
        return;
    }
    if (numeroEntero === 1) {
        console.log(numeroEntero, "No es primo");
        return;
    }
    if (((numeroEntero / numeroEntero) === 1) && ((numeroEntero / 1) === numeroEntero)) {
        console.log(numeroEntero, "Es primo");
    } else {
        console.log(numeroEntero, "No es primo");
    }
}

function parImpar(numero) {
    (!numero) ?
    console.warn("debe de ingresar un número"): (typeof(numero) != 'number') ?
        console.error("el valor ingresado no es un número, valor:", numero) :
        ((numero % 2) == 0) ?
        console.log(`el número ${numero} es PAR`) :
        console.log(`el número ${numero} es IMPAR`);
}

function convertTemp(valor, unidad) {

    let valorConvertido
    if (!(unidad === 'C' || unidad === 'c') && !(unidad === 'F' || unidad === 'f')) {
        console.error(`la unidad de medida ${ unidad } no es un tipo de medida admitido`);
        return;
    } else if (unidad == 'f' || unidad == 'F') {
        valorConvertido = (valor - 32) * (5 / 9);

        console.log(`${ valor } F° son ${ valorConvertido } C°`);
    } else if (unidad == 'c' || unidad == 'C') {
        valorConvertido = (valor * (9 / 5)) + 32;

        console.log(`${ valor } C° son ${ valorConvertido } F°`);

    }

}
numPrimo(83);

parImpar(7);

convertTemp(20, 'D');