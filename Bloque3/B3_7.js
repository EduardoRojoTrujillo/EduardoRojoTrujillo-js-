function mostrarDeportes() {
    let futbol = document.getElementById('futbol');
    let basket = document.getElementById('basket');
    let tenis = document.getElementById('tenis');
    let documento = '';
    if (futbol.checked) {
        documento += 'Fútbol ';
    }
    if (basket.checked) {
        documento += 'Básket ';
    }
    if (tenis.checked) {
        documento += 'Tenis';
    }
    alert('Los deportes que prácticas son: ' + documento);
}