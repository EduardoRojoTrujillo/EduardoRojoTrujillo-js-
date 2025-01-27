function concatenartexto() {
    let name = document.getElementById('nombre').value;
    let subname = document.getElementById('apellido').value;
    let sumanombres = name+' '+subname;
    document.getElementById('resultado').value = sumanombres;
}