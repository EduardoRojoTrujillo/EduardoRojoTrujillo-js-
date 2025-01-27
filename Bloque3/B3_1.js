function cargarVector(vectors) {
    for (let f = 0; f < vectors.length; f++) {
        let numero = parseInt(prompt('Introduzca un número'));
        vectors[f] = numero;
    }
    return lista;
}

function suma(vectors) {
    let suma = 0;
    for (let f = 0; f < vectors.length; f++) {
        suma += lista[f];
    }
    return 'el valor de la suma = ' + suma;
}

function suma36(vectors) {
    let suma2 = 0;
    for (let f = 0; f < vectors.length; f++) {
        if (vectors[f] > 36) {
            suma2 += vectors[f];
        }
    }
    return '<br>el valor de la suma de números mayores a 36 = ' + suma2;
}

function imprimirLista50(vectors) {
    let mayor50 = 0;
    for (let f = 0; f < vectors.length; f++) {
        if (vectors[f] > 50) {
            mayor50 += 1;
        }
    }
    return '<br>valores mayores a 50 = ' + mayor50;
}

let lista = new Array(8); 
let vector = cargarVector(lista); 
let suma1 = suma(lista); 
let sumaMayor36 = suma36(lista); 
let resultadoFinal = imprimirLista50(lista); 
document.write(suma1 + sumaMayor36 + resultadoFinal); 