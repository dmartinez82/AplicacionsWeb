
var primero = -5;
var segundo = 7;

var texto = "El resultado es ";


var resultado = suma_siempre_positivo(primero, segundo);

if (resultado > 10){
    //document.write('Es mayor que 10.');
}

for (var j = primero; j <= segundo; j++) {
    //document.write(j + '<br/>');
}

document.write(texto + resultado +".");
document.write('<br/>');
document.write('<br/>');

var cars = ["Saab", "Volvo", "BMW", "Mazda"]; //Esto es un Array

if (resultado > 10) cars.push("KIA");

for (var k = cars.length-1; k>=0 ; k--) {
    document.write(cars[k]);
    document.write('<br/>');
}

document.write('<br/>');

var person = {firstName:"John", lastName:"Doe", age:46};
document.write(person.age);

function suma_siempre_positivo(a, b){

    if (a<0) a = -a; //valor absoluto
    
    if (b<0) b = -b; //valor absoluto

    return a+b;
}

function pulsado(){
    
}

function muestra_password(){;
    
    var elemento_password = document.getElementById("password");
    var valor_password = elemento_password.value;

    alert(valor_password)

    var erroneo = false;
    if (valor_password.length<8){
        erroneo = true;
    }

    if (!valor_password.match(/[A-Z]+/)){
        erroneo = true;
    }

    if (erroneo){
        alert("PASSWORD NO ACEPTABLE");
        elemento_password.value = ""; //borramos el password
    } else{
        alert("PASSWORD ACEPTABLE!!");
    }

}

function muestra_altres(mostrar){
    if (mostrar) document.getElementById("sel_altres").style.display = "block";
    else document.getElementById("sel_altres").style.display = "none";
}

function colores(){
    var elementos = document.getElementsByClassName("nombre");

    console.log(elementos.length)
    console.log(elementos)

    for(var i = 0; i < elementos.length; i++) {
        elementos[i].style.color  = 'red';
    }
}