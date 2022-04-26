function invertir(miString) {
    let stringInvertida = ""
    if (!miString) {
        console.warn("No ingresó una cadena")
    }
    for (let i = miString.length; i >= 0; i--) {
        stringInvertida += miString.charAt(i);
    }

    // console.log("reverse: ", stringInvertida);
    return stringInvertida;
}

function contarPalabras(miString, regExp) {
    const veces = [...miString.matchAll(regExp)]

    console.log(`la palabra "${regExp}" se repite ${veces.length} veces en el array "${miString}"`);
}

function palindromoCheck(miString) {

    miStringLower = miString.toLowerCase();
    invertida = invertir(miStringLower).toLowerCase();
    let palindromo = false;

    for (let i = 0; i <= miString.length; i++) {
        if (miStringLower[i] == invertida[i]) {
            palindromo = true;
        } else {
            palindromo = false;
            break;
        }
    }

    console.log(`la palabra ${miString}, ¿resulta palindromo?`, palindromo);
}

function eliminarPatronDeCaracteres(miString, termino) {
    regExp = new RegExp(termino, "ig");

    const res = miString.replaceAll(regExp, "");

    console.log(res);

}

string = "siuuuu!!!"
const palabra = invertir(string);

console.log(`${string} invertida es ${palabra}`);

contarPalabras("hola hola dfdd", "hola");

palindromoCheck("salas");

eliminarPatronDeCaracteres("xyz1, xyz2 y xyz3", "xYZ");