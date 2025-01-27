function calcularMultiplos() {
    let numero=8
    for (numero>=0; numero<=500; numero=numero+8) {
        document.write(numero)
        if (numero<496) {
            document.write("-")
        } else {
            document.write("")
        }
    }
    return "<br>"+ "Los multiplos llegaron hasta ser menor o igual a 500"
}
resultado=calcularMultiplos()
document.write(resultado)