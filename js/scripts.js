let bill = document.querySelector('.bill-input');
let billNumeros = parseInt(bill.value);

let personas = document.querySelector('.input-personas');
let personasNumeros = parseInt(personas.value);

let propinaDividida =  document.querySelector('.cuadro-totales_total-resultado-p');
let propinaTotal =  document.querySelector('.cuadro-totales_total-resultado2-p');


let botones = document.querySelectorAll('.boton');

let alert = document.querySelector('#alerta')
let valorPropina = 5;

botones.forEach(element => {
    element.addEventListener('click', event=>{
        //cambiar estilos
        removerActive()
        element.classList.add('boton-seleccionado');
        
        valorPropina = parseInt(event.target.innerText.slice(0,-1));
    
     calcularTips()
    });
});

function removerActive() {
    botones.forEach(element => {
        element.classList.remove('boton-seleccionado');
    });
}



// ACTUALIZANDO LA PROPINA

bill.addEventListener('input', ()=>{
    billNumeros = parseFloat(bill.value);
    calcularTips()
})

// ACTUALIZANDO CUSTOME

let botonCustome = document.querySelector('.boton-custome');

botonCustome.addEventListener('click', ()=>{

    removerActive()
});

botonCustome.addEventListener('input', ()=>{

   valorPropina = parseInt(botonCustome.value);
   if (!isNaN(valorPropina)) {
    
       calcularTips()
   } 
    });

// ACTUALIZANDO PERSONAS
personas.addEventListener('input', ()=>{
    personasNumeros  = parseFloat(personas.value);
    if (personasNumeros == 0 || isNaN(personasNumeros)) {
        personas.style.borderColor =   'rgb(164, 68, 68)';
        alert.classList.add('error');
    }else{
        alert.classList.remove('error'); 
        personas.style.borderColor =   'rgb(189, 41, 97)';
        calcularTips()
    }
});

// boton reset
let botonReset = document.querySelector('.boton-reset');
 botonReset.addEventListener('click', ()=>{
    bill.value = 0;
    billNumeros = 0;
    personas.value = 5;
    personasNumeros = 5;
    botonCustome.value = 'Custom';
    calcularTips()
 });


function  calcularTips(){
 // calculo de tip Amount
 propinaDividida.innerText = ((billNumeros * valorPropina / 100)  / personasNumeros).toFixed(2);
 // calculo del total
 propinaTotal.innerText =  (((billNumeros * valorPropina / 100) +  billNumeros)/personasNumeros).toFixed(2);
}
