// @ Author: Joel Isaac Hoil Calderón, August 2021.

function convertirBase(numero, base) {

    if ((typeof(numero) !== 'number') || (typeof(base) !== 'number')) {
        console.log(`el número ${numero} o la base ${ base } no es del tipo numérico`);
        return;
    }

    if (base === 2) {

        let sumaDePotencia = 0;
        // quitar ceros a la izquierda
        let numStrWithOutZerosLeft = numero.toString(8);

        let arr = [...numStrWithOutZerosLeft].reverse();

        for (let index = 0; index < arr.length; index++) {

            if (arr[index] === '1') {
                sumaDePotencia += Math.pow(2, index);
            }
        }
        console.log(`el binario ${ numStrWithOutZerosLeft } en decimal es ${sumaDePotencia}`);

    } else if (base === 10) {

        let div;
        let binario = [];
        const numVirgin = numero;
        do {
            if ((numero % 2) == 1) { // impar
                div = parseInt(numero / 2);
                numero = div;
                binario.push('1');
            } else {
                div = parseInt(numero / 2);
                numero = div;
                console.log(div);
                binario.push('0');
            }
            console.log("resultado de division " + div);

        } while (div !== 0);

        let arrayBin = binario.reverse().toString();
        console.log(`El decimal ${numVirgin} en binario es ${ arrayBin }`);


    } else {
        console.warn("Sólo se permite base 2 o base 10")
    }


}

function aplicarDescuento(precio, descuento) {

    if (descuento > 100) {
        console.warn("el descuento no puede ser más del 100%");
        return;
    }
    let precioFinal = (precio - ((precio * descuento) / 100));
    console.log(`El precio después de aplicar el ${ descuento }% de descuento al producto con valor $${ precio } es $${ precioFinal }`);
    document.write(`<p>El precio después de aplicar el ${ descuento }% de descuento al producto con valor $${ precio } es $${ precioFinal }</p>
    `);
}

function calcularAnios(year, month, day) {


    dateInit = new Date(year, month, day).getTime(); // time expressed in ms
    actualDate = new Date().getTime(); // time expressed in ms

    if ((year === undefined) || (month === undefined) || (day === undefined)) {
        console.error("No debe de omitir un dato, debe ingresar Año, Mes y Día");
        return;
    }

    if ((typeof(year) !== 'number') || (typeof(month) !== 'number') || (typeof(day) !== 'number')) {
        console.warn("el año, mes y día deben ser de tipo numérico");
        return;
    }

    lengthYear = year.toString().length;
    lengthDay = day.toString().length;
    lengthMonth = month.toString().length;


    if (day > 31) {
        console.warn("no puede exceder de 31 en los días");
        return;
    }

    if (month > 12) {
        console.warn("no puede exceder de 12 en los días");
        return;
    }

    if (lengthYear > 4 || lengthYear < 4) {
        console.warn("la longitud del año debe ser de 4 dígitos");
        return;
    }
    if (lengthDay > 2) {
        console.warn("la longitud del día debe ser de 2 dígitos");
        return;
    }
    if (lengthMonth > 2) {
        console.warn("la longitud del mes debe ser de 4 dígitos");
        return;
    }

    passedYears = Math.floor((actualDate - dateInit) / (1000 * 60 * 60 * 24 * 365));

    return (Math.sign(passedYears) === -1) ?
        console.log(`faltan ${ Math.abs(passedYears) } años para el ${ year }`) :
        (Math.sign(passedYears) === 1) ?
        console.log(`Han pasado ${ passedYears } años desde el ${ year }/${ month }/${ day } en el formato YY/MM/DD`) :
        console.log("estamos en el año actual");



}
convertirBase(15, 10);
aplicarDescuento(1000, 20);
calcularAnios(2021, 4, 23);