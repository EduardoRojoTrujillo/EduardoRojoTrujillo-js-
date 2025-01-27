function suma() {
    let sumaTotal=0, sumando=0, documento;
    do {
        sumando=parseInt(prompt('Introduzca un valor a sumar (Introduzca el valor "9999" para obtener el resultado)'));
        sumaTotal=sumando+sumaTotal
    } while (sumando!=9999)
    sumaTotal=sumaTotal-9999
    if (sumaTotal<0) {
        documento="menor"
    } else {
        if (sumaTotal==0) {
            documento="igual"
        } else {
            documento="mayor"
        }
    }
    return "La suma de todos los números es igual a "+sumaTotal+"<br>La suma de los números es "+documento+" que 0"
}
let resultado=suma();
document.write(resultado)