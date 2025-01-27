numero=parseInt(prompt("Introduzca un número del 1 al 10 para mostrar su tabla de multiplicar"))
if (numero>=1 && numero <=10) {
    function mostrarTabla() {
    let acumulador, nuevoNumero=numero;
    for (acumulador=0; acumulador<12; acumulador++) {
        document.write(nuevoNumero+" ");
        nuevoNumero=numero+nuevoNumero
    }
    return "<br> Se mostro la tabla de multiplicar del número seleccionado hasta 12"
}
resultado=mostrarTabla();
document.write(resultado)
} else {
    alert("El número introducido no es válido");
}