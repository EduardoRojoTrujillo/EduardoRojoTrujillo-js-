function calcularSueldos() {
    let sueldo=0, contador, sueldoMenor=0, sueldoMayor=0, sueldoIndeterminado=0, totalSueldos=0;
    for (contador=0; contador<5; contador++) {
        sueldo=parseInt(prompt("Introduzca el sueldo del trabajador"))
        if (sueldo>=100 && sueldo<=300) {
            sueldoMenor++
        } else {
            if (sueldo>300) {
                sueldoMayor++
            } else {
                sueldoIndeterminado++
            }
        }
        totalSueldos=sueldo+totalSueldos
    }
    return "Existen: <br>"+sueldoMenor+" empleados que cobran entre 100 y 300€ <br>"+sueldoMayor+" empleados que cobran más de 300€ <br>"+sueldoIndeterminado+" empleados que no están en el rango de sueldos pedidos o son incorrectos <br> Y el dinero total que gasta la empresa en el sueldo de los empleados es: "+totalSueldos+"€"
}
let resultado=calcularSueldos()
document.write(resultado);