// @ Author: Joel Isaac Hoil Calderón, August 2021.

contarVocales = (cadena = '') => {

    if (typeof(cadena) !== 'string') {
        console.error("el valor ingresado no es una cadena");
        return;
    }
    let vocales = 0;
    let consonantes = 0;
    cadenaLower = cadena.toLowerCase();
    arrayCadena = [...cadenaLower];

    arrayCadena.forEach(letra => {
        if ((letra === 'a') || (letra === 'e') || (letra === 'i') || (letra === 'o') || (letra === 'u') || (letra === 'á') || (letra === 'é') || (letra === 'í') || (letra === 'ó') || (letra === 'ú')) {
            vocales++;
        } else {
            consonantes++;
            if (letra === ' ') {
                consonantes--;
            }
        }
    });
    console.log(`${cadena} tiene ${vocales} vocales y ${consonantes} consonantes`);
}

validarNombre = (nombreCompleto) => {
    nombreCompleto = "Joel Hoil";

    if (typeof(nombreCompleto) !== 'string') return console.log("El valor debe se ser una cadena");
    if (nombreCompleto === undefined) return console.log("Debes de ingresar una cadena");
    if (nombreCompleto === null) return console.log("Debes de ingresar una cadena");

    const regExp = /\b([A-Z]([a-z]{2,}))\b/g;

    let test = regExp.test(nombreCompleto);

    let palabrasValidas = nombreCompleto.match(regExp);

    console.log(palabrasValidas);
    console.log(nombreCompleto);

    if (nombreCompleto.length > palabrasValidas.toString().length) {
        console.warn("Nombre completo no válido, los nombres y apellidos empiezan con mayúculas y no tienen números");
    } else {
        console.log("Nombre competo válido.");
    }
}

emailValidator = (email) => {

    email = "yoelsann@gmail.com";

    if (typeof(email) !== 'string') return console.log("El valor debe se ser una cadena");
    if (email === undefined) return console.log("Debes de ingresar una cadena");
    if (email === null) return console.log("Debes de ingresar una cadena");

    const mailRegExp = /\b(([a-z0-9]{2,}(@{1})([a-z]{2,})\.([a-z]{2,})))\b/g;

    const regExpSuggest = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

    let match = mailRegExp.test(email);
    let matchArray = email.match(mailRegExp);
    console.log(matchArray);
    if (match === true) {
        console.log(`el email ${ email } es válido`);
    } else {
        console.warn(`el email ${ email } NO ES válido, no debe llevar caracteres especiales, ni tener mayúsculas, no omitir el punto en el dominio, tanto el dominio y el nombre deben ser mínimo de 2 caracteres`);
    }
}
validarNombre();
emailValidator();