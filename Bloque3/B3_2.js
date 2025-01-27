function mostrarPrimeras(palabra) {
    primeras = palabra.substring(0, palabra.length/2);
    return primeras;
}
function mostrarUltimo(palabra) {
    ultima = palabra.charAt(palabra.length-1);
    return ultima;
}
function mostrarInverso(palabra) {
    inverso = ''
    for (acumulador=0; acumulador<palabra.length;acumulador++) {
        pedirInverso = palabra.charAt(palabra.length-1-acumulador)
        inverso = inverso+pedirInverso
    }
    return inverso;
}
function mostrarGuion(palabra) {
    let resultadoGuion = ''
    for (acumulador=0; acumulador<palabra.length; acumulador++) {
        caracter = ''
        guion = palabra.charAt(acumulador);
        if (acumulador+1!=palabra.length) {
            caracter = '-';
        }
        resultadoGuion = resultadoGuion+guion+caracter;
    }
    return resultadoGuion;
}
function mostrarVocales(palabra) {
    contarVocales=0
    palabra = palabra.toLowerCase()
    for (acumulador=0; acumulador<palabra.length;acumulador++) {
        let i = palabra.charAt(acumulador)
        if (i=='a' || i=='e' || i=='i' || i=='o' || i=='u') {
            contarVocales++
        }
    }
    return contarVocales
}
function mostrarResultado(palabra) {
    primeras = mostrarPrimeras(palabra);
    ultimo = mostrarUltimo(palabra);
    inverso = mostrarInverso(palabra);
    guion = mostrarGuion(palabra);
    vocales = mostrarVocales(palabra);
    return 'La primera mitad de la palabra es: '+primeras+'<br>El último caractér de la palabra es: '+ultimo+'<br>La palabra a la inversa es: '+inverso+'<br>La palabra separa por guiones es: '+guion+'<br>El número de vocales de la palabra es: '+vocales;
}
palabraIntroducida = prompt('Introduzca una palabra')
let resultado = mostrarResultado(palabraIntroducida)
document.write(resultado)