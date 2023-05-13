
let boton = document.getElementById("calcular_boton");

boton.addEventListener('click', function () {

    let filamento = document.getElementById("filamento").value;
    let filamento_referencia = document.getElementById("filamento_referencia").value;
    let tiempo = document.getElementById("tiempo").value;
    let kw = document.getElementById("kw").value;
    let iva = document.getElementById("iva").value;
    let ganancia = document.getElementById("ganancia").value;
    let filamento_peso = document.getElementById("filamento_peso").value;
    
    let resultado = calcular(filamento, filamento_referencia, tiempo, kw, iva, ganancia, filamento_peso);

    let cuadro_resultado = document.getElementById("resultado");
    cuadro_resultado.textContent = "$ " + resultado;
});

function calcular(filamento, filamento_referencia, tiempo, kw, iva, ganancia, filamento_peso) {
    let base_material = (((filamento_referencia/filamento_peso)*filamento) + (tiempo*kw));
    console.log(base_material);
    return (base_material * ((iva/100)+1)) * (ganancia/100);
}