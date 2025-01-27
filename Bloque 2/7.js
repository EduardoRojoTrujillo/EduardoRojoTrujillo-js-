function pedirValores(valor) {
    let contarNegativo=0, contarPositivo=0, contarMultiplo=0, valorAcumulado=0;
    for (acumulador=0; acumulador<10; acumulador++) {
        valor=parseInt(prompt("Introduzca un valor entero"));
        if (valor<0) {
            contarNegativo++
        } else {
            if (valor>0) {
                contarPositivo++
            }
        }
        if (valor%15==0) {
            contarMultiplo++
        }
        if (valor%2==0) {
            valorAcumulado=valorAcumulado+valor
        }
    }
    return "La cantidad de valores negativos introducidos es de: "+contarNegativo+"<br> La cantidad de valores positivos introducidos es de: "+contarPositivo+"<br> La cantidad de valores múltiplos de 15 es de: "+contarMultiplo+"<br> El valor acumulado de los números que son pares es de: "+valorAcumulado
}
let numero=parseInt(prompt("Introduzca un valor entero"));
resultado=pedirValores(numero);
document.write(resultado)