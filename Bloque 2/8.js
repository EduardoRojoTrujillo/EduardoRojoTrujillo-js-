function mostrarMenor(valor1, valor2, valor3) {
    if (valor1<valor2 && valor1<valor3) {
        textoEnPantalla="El número más pequeño es: "+valor1
    } else {
        if (valor2<valor3) {
            textoEnPantalla="El número más pequeño es: "+valor2
        } else {
            textoEnPantalla="El número más pequeño es: "+valor3
        }
    }
    return textoEnPantalla
}
let numero1, numero2, numero3;
numero1=parseInt(prompt("Introduzca el primer valor"));
numero2=parseInt(prompt("Introduzca el segundo valor"));
numero3=parseInt(prompt("Introduzca el tercer valor"));
resultado=mostrarMenor(numero1, numero2, numero3);
document.write(resultado)