function obtenerTamanio(cadena = "") {
    let res;

    if (typeof(cadena) == 'object') {
        res = Object.keys(cadena).length;
    } else {
        res = cadena.length;
    }
    console.log("El tamaño del elemento es: ", res);
}

data = {
    mes: 'enero',
    productos: ['tomate', 'cebolla', 'pepino'],
    precios: [20, 30, 50],
    sucursal: "Cuzamá"
}

function recortarTxt(miString, index) {
    const slice = miString.slice(0, index);
    console.log("texto cortado: ", slice);
}

function separadorCadenas(miString, separador) {
    const split = miString.split(separador)
    console.log("cadena separada", split);
}

function repetidor(miString, count) {

    if (typeof(miString) != 'string' || count < 0) {
        throw new Error("el string proporcionado o el count no son un tipo de dato válido")
    } else {
        miString += " ";
        const repeat = miString.repeat(count)
        console.log("cadena repetida %d veces: ", count, repeat);
    }
}
obtenerTamanio(data);

recortarTxt("hola mundo", 200);

separadorCadenas("hola mundo soy joel", " ");

repetidor("hola mundo", 3);