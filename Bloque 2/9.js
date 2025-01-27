function calcularPerimetro(lado) {
    perimetro=lado*4
    return "El perímetro del cuadrado es: "+perimetro
}
valor=parseInt(prompt("Introduzca el lado del cuadrado"))
resultado=calcularPerimetro(valor)
document.write(resultado)