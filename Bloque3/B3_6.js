function calcularImporte(){
    const pizza = document.getElementById("pizza").value;
    const cantidad=parseInt(document.getElementById("cantidad").value);
    const total=pizza*cantidad;
    document.getElementById("importe").value=total;
}