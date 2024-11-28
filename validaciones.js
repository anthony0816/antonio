// Verificación CAMPO TEXTO 
var formulario = document.getElementById('form');
var color;
var borderLeftColor;
var texto;
var tamaño ;
var border;

const verificarNombre = (event) => {
    let numeros = /^[a-zA-Z\s]+$/;

    let etiqueta = document.getElementById('nombre');
    
    if (!(numeros.test(etiqueta.value))||(/^\s*$/.test(etiqueta.value))){
       
        borderLeftColor = etiqueta.style.borderLeft; 
        color = etiqueta.style.color;
        texto = etiqueta.value;
        
        etiqueta.value = "Nombre Incorrecto caracteres especiales no admitidos(123$%..)"
        etiqueta.style.color="red"
        etiqueta.style.borderLeft ='10px solid red';
        etiqueta.style.transform ='scale(1.05)'
        event.preventDefault(); // 
    }
}

document.getElementById('form').addEventListener('submit', function(event) {
    verificarNombre(event); // Referencia correcta a la función
});

// Quitar el error 
document.getElementById('nombre').addEventListener('click', function(event){
    let etiqueta = document.getElementById('nombre');
    etiqueta.style.color= color;
    etiqueta.style.borderLeft= borderLeftColor;
    if (etiqueta.value =="Nombre Incorrecto caracteres especiales no admitidos(123$%..)") {
        etiqueta.value= "";
    }
    etiqueta.style.transform='scale(1.0)'
});

// Verificar Campo Edad 
document.addEventListener('submit' , function(event){
    let edad = document.getElementById('edad');
    let titulo = document.getElementById('tituloEdad');
    if(!(/\d/.test(edad.value))){
        
        tamaño = edad.style.width;
        border = edad.style.border;
        color = titulo.style.color;

        edad.style.transition='all 0.1s';
        edad.style.width ="77px"
        edad.style.border= '3px solid red';
        edad.value="INVALIDO"
        titulo.style.color="red";
        
        event.preventDefault();
    }
})

document.getElementById('edad').addEventListener('click', function(event){
    edad.style.transition='all 0.1s';
    edad.style.width = tamaño;
    edad.style.border= border;
    
    if (edad.value == "INVALIDO") {
        edad.value="";
    }
    document.getElementById('tituloEdad').style.color= color;
} )

//Validar Sexo

formulario.addEventListener('submit', function(event){
   
    let masculino = document.getElementById('masculino');
    let femenino = document.getElementById('femenino');
    let orto = document.getElementById('otro');

    if((masculino.value == "")&&(femenino.value == "")&&(orto.value == "")){
        color = document.getElementById('tituloSexo').style.color;

        document.getElementById('tituloSexo').style.color="red";
        document.getElementById('sexoContainer').style.border="2px solid red";
        event.preventDefault();
   }

})
let backgroundColor;
let Sborder;
let Scolor;
let masculino = document.getElementById('masculino');
let femenino = document.getElementById('femenino');
let otro = document.getElementById('otro');

masculino.onclick = function(event){
event.preventDefault();
if(masculino.value == "M") return 0;
masculino.value="M";
femenino.value=null;
otro.value=null;
backgroundColor = masculino.style.backgroundColor;
Sborder = masculino.style.border;
Scolor  = masculino.style.color;

masculino.style.transition="all 0.2s";
masculino.style.backgroundColor="#222";
masculino.style.border="2px solid #c58210";
masculino.style.color = "#aaa";

femenino.style.backgroundColor = backgroundColor;
femenino.style.border = Sborder;
femenino.style.color = Scolor;

otro.style.backgroundColor = backgroundColor;
otro.style.border = Sborder;
otro.style.color = Scolor;

document.getElementById('tituloSexo').style.color= color;
document.getElementById('sexoContainer').style.border= "none";
}

femenino.onclick = function(event){
    event.preventDefault();
    if(femenino.value == "F") return 0;
    masculino.value=null;
    femenino.value="F";
    otro.value=null;
    backgroundColor = femenino.style.backgroundColor;
    Sborder = femenino.style.border;
    Scolor = femenino.style.color;
    
    femenino.style.transition="all 0.2s";
    femenino.style.backgroundColor="#222";
    femenino.style.border="2px solid #c58210";
    femenino.style.color = "#aaa";
    
    masculino.style.backgroundColor = backgroundColor;
    masculino.style.border = Sborder;
    masculino.style.color = Scolor;
    
    otro.style.backgroundColor = backgroundColor;
    otro.style.border = Sborder;
    otro.style.color = Scolor;
    
    document.getElementById('tituloSexo').style.color= color;
    document.getElementById('sexoContainer').style.border= "none";
    }

    otro.onclick = function(event){
        event.preventDefault();
        if(otro.value == "otro") return 0;
        masculino.value=null;
        femenino.value=null;
        otro.value="otro";
        backgroundColor = otro.style.backgroundColor;
        Sborder = otro.style.border;
        Scolor = otro.style.color;

        otro.style.transition="all 0.2s";
        otro.style.backgroundColor="#222";
        otro.style.border="2px solid #c58210";
        otro.style.color = "#aaa";
        
        femenino.style.backgroundColor = backgroundColor;
        femenino.style.border = Sborder;
        femenino.style.color = Scolor;
        
        masculino.style.backgroundColor = backgroundColor;
        masculino.style.border = Sborder;
        masculino.style.color =Scolor;
        
        document.getElementById('tituloSexo').style.color= color;
        document.getElementById('sexoContainer').style.border= "none";
        }
            




