"use strict";

  //CONDICIONALES

    // if

let cilindraje = 100;
let valor = 0;

if (cilindraje = 100) {
    valor = 200000
}
else if (cilindraje <= 200) {
    valor = 350000;
}
else {
    valor = 789000;
}


switch (valor) {
    case 200000:
        console.log ('El vehiculo tiene SOAT economico de: ${valor}');
        break;
    case 450000:
    case 350000:
        console.log('El vehiculo tiene un SOAT de: ${valor}');
        break;
    default:
        console.log ('El vehiculo tiene un SOAT COMPLETO economico de: ${valor}');
}

switch (true) {
    case (valor <= 200000):
        console.log ('El vehiculo tiene SOAT economico de: ${valor}');
        break;
    case (valor > 200000 || (valor <= 350000)):
        console.log('El vehiculo tiene un SOAT de: ${valor}');
        break;
    default:
        console.log ('El vehiculo tiene un SOAT COMPLETO economico de: ${valor}');
        break;
}

    // for

for (let i=0 ; i <10 ; i ++) {
    console.log (`Iteraccion N: ${i}`);
}

    //while
let i = 0;
while (5 == 5) {
    console.log (`Iteraccion N: ${i}`);
    if (i < 10) {
        i++;
    } 
    else {
        break;
    }
}


    // do while

let a = 0;


    // for - of

let marcas = ['sushi guayaba', 'mike', 'niguala', 'daniels', 'ardidas', 'arturo anden'];

for (let marca of marcas) {
    console.log(typeof marca);
    console.log(marca);
}

    // for - in

let camper = { nombre: "Muriel", edad: 20 }

for (let clave in camper) {
    console.log(clave);
    console.log(camper[clave]);
    
}


for (let marca of marcas) {
    if(marca == "niguala") {
        //continue;
    }

    console.log('La marca es ${marca}');
    
}


























