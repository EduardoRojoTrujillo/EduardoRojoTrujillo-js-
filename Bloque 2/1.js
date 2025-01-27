let palabra;
        function mostrarPalabra(word)
    {
       while (word!="Gato"&&word!="Perro"&&word!="Mesa"&&word!="Casa");
            switch (word)
         {
            case 'Gato':
            return "Cat"
            break;
            case 'Perro':
            return "Dog"
            break;
            case 'Mesa':
            return "Table"
            break;
            case 'Casa':
            return "House"
            break;
         }
    }
palabra=prompt("Ingrese una de las siguientes palabras (Gato, Perro, Lapiz, Casa)");
let resultado=mostrarPalabra(palabra);
document.write(resultado);