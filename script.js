const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');
const alerta = document.querySelector('#alerta');


btn.addEventListener('mousedown' ,sumarInputValues)

function sumarInputValues(event) {
    //console.log({event})
    event.preventDefault();
    const sumaNumeros = Number(input1.value)+ Number(input2.value);
    resultado.innerText= "Resultado: " + sumaNumeros;
}




