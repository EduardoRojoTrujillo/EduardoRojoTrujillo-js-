function leerDatos() {
    let numeroDocumento, edad, sexo, contador=0, contarvaron=0, contarmujer=0, contaredad=0;
    do {
        numeroDocumento=parseInt(prompt('Introduzca su número de documento sin letra'))
        if (numeroDocumento!=0) {
            edad=parseInt(prompt('Introduzca su edad'))
            sexo=prompt('Introduzca su sexo ("femenino" o "masculino")')
            contador++
            if (sexo =="masculino") 
            {
                contarvaron++
            } else {
                if (sexo=="femenino") 
                {
                    contarmujer++
                } else 
                {
                    console.log('Error');
                }
            }
            if (edad>=16 && edad<=65) 
            {
                contaredad++
            }
        }
    }
    while (numeroDocumento!=0)
    return "La cantidad de personas censadas es de: "+contador+"<br>La cantidad de varones es de: "+contarvaron+"<br>La cantidad de mujeres es de: "+contarmujer+"<br>Y la cantidad de hombres con edad entre 16 y 65 años es de: "+contaredad
}
let resultado=leerDatos();
document.write(resultado)