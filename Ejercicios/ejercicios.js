// 1. Crea una función que reciba dos números y devuelva su suma

function sumar(a, b) {  
    return a + b; 
}

console.log(sumar(3, 3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let array = [1, 2, 400, 4, 5];

function mayor(arr) {
    let numeroMayor =  arr[0];
    for(let i of arr) {
        if (i > numeroMayor) {
            numeroMayor = i;
        }
    }

    return numeroMayor;
}


console.log(mayor(array));


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let texto = "Juan Diego";


function vocales(name) {
    let numeroVocales = 0;
    let vocalesn = ["a", "e", "i", "o", "u"];

    for(let i of name) {
        for(let e of vocalesn) {
            if (i === e) {
                numeroVocales += 1;
            }
        }
        vocalesn.forEach(function (e) {
            
        })     
    }
    return numeroVocales;
}

console.log(vocales(texto));



// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let strings = ["sara", "jUan Diego", "Marcela", "matias", "jose david"];

function mayusculas(nombres) {
    let newStrings = [];

    for(let i of nombres) {
        newStrings.push(i.toUpperCase());
    }

    return newStrings;
}

console.log(mayusculas(strings));



// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// Si n > 2 divisores = No primo : Si n == 2 = es primo

function primos(numero) {
    let divisibles = 0;

    for(let i = 1; i <= numero + 1; i++) {
        if ( numero % i === 0) {
            divisibles += 1;
        }
        
    }

    let resultado = divisibles === 2 ? "Es primo" : "No es primo";
    return resultado;
}

console.log(primos(1));


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9, 2];

function comunes() {
    let arr = [];
    for(let i of arr1) {
        arr2.forEach(function (a) {
            if (i === a) {
                arr.push(a);
            }
        })
    } 
    return arr;
}

console.log(comunes());


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let arrayNum = [1,2,3,4,5,6,8,7,5,10]

function sumaArray(array) {
    let suma= 0;
    for(let i of array){
        if (i % 2 === 0){
            console.log(i)
            suma += i;
        }
    }
    return suma;
}

console.log(`La suma de los numeros pares es: ${sumaArray(arrayNum)}`);


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let arrNum = [1, 2, 3, 4, 5, 6]
function cuadradoArray(array) {
    let newArray=[];
    for(let i of array){
       newArray.push(i*i);
    }
    return newArray;
}
console.log(`Nuevo array: ${cuadradoArray(arrNum)}`);


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let palabra = "atardeceres";

function orden() {
    return palabra.split("").reverse().join("");
}

console.log(orden());