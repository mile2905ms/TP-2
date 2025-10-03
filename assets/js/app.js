var numero = document.getElementById("numero");
var unidad_entrada = document.getElementById('unidad_entrada');
var unidad_salida = document.getElementById('unidad_salida');
var boton = document.getElementById("boton");
var resultado = document.getElementsByClassName("resultado")[0];

var relacionConversion ={
    metros: {
        metros:1,
        kilometros: 0.001,
        millas: 0.000621371
    },

    kilometros: {
        metros:1000,
        kilometros: 1,
        millas: 0.621371
    },

    millas: {
        metros:1609.34,
        kilometros: 1.60934,
        millas: 1
    },
        
    
}

function convertir(){
    var result = numero.value * relacionConversion[unidad_entrada.value][unidad_salida.value];
    resultado.innerText = result;
}

boton.addEventListener('click', function(){
    convertir();
})

