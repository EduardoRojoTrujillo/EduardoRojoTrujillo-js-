function mostrarCuatrimestre() {
    let fecha=new Date()
    let mes=fecha.getMonth()
    if (mes<=4) {
        resultadoFecha="Estamos en el primer cuatrimestre del año"
    } else {
        if (mes>4 && mes<=8) {
            resultadoFecha="Estamos en el segundo cuatrimestre del año"
        } else {
            if (mes>8 && mes<=12) {
                resultadoFecha="Estamos en el tercer cuatrimestre del año"
            }
        }
    }
    return resultadoFecha
}
resultado=mostrarCuatrimestre();
document.write(resultado)