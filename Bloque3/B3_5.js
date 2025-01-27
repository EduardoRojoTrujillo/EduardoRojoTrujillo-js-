resultado = document.getElementById('resultado');
function Precio(pizza) {
    switch (pizza) {
        case 'jamon':
            resultado.value = '10€'
            break;
        case 'mozzarella':
            resultado.value = '20€'
            break;
        case 'morrones':
            resultado.value = '30€'
            break;
    }
}