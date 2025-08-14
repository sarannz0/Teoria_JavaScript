let saludo = "Hola camper, ";
let nombre = "Sara Nuñez";
console.log (saludo, nombre);

/* Un comentario*/

//Funcion para sumar un numero


/**
 * Suma de dos numeros a y b
 * @param {number} a El primer numero
 * @param {number} b El segundo numero
 * @returns {number} La suma de a y b resultado
 */
function sumar(a,b) {
    return a + b;
}

//Llamar a la funcion sumar
console.log(sumar(1, 10));

function mostrar(any) {
    console.log(any);
}
//Operadores Matematicos
mostrar(5+5);
mostrar(5-3);
mostrar(5*3);
mostrar(5/3);
mostrar(5%3);
mostrar(5**2);
let number = 5;

//Incremento o decrementos
// -- o ++ number -> Inmediata
// number -- o ++ -> Posterior

mostrar(++ number); //6
mostrar("Resultado de number despues de ++1" + number);
mostrar(number --); //5
mostrar(number);
mostrar(number +=2);
mostrar(number-=2);
mostrar(number *=2);
mostrar(number /=5);
mostrar(number %=2);
mostrar(number /0);

//Operadores de igualdad
mostrar("Igualdad: "+ (5 == '5'))
mostrar("Igualdad: "+ (5 === '5'))
mostrar("Desigualdad: "+ (5 != '5'))
mostrar("Desigualdad estricta: "+ (5 !== '5'))
mostrar("Mayor que: "+ (5 > '5'))
mostrar("Mayor igual que: "+ (5 >= '5'))
mostrar("Menor que: "+ (5 < '5'))
mostrar("Menor igual que: "+ (5 <= '5'))
mostrar("Concatenacion: "+ (5 + '5'))

let a,b,c;
a=b=c=1+20
mostrar(a);
mostrar(b);
mostrar(c);


//Operadores logicos

mostrar("Operador y logico(And): " +(true && true))
mostrar("Operador y logico(And): " +(5 != 5 && true))
mostrar("Operador y logico(Or): " +(5 > 5 || 2<6))
mostrar("Operador y logico(NOT): " + !(5>=5))
mostrar("Operador y logico(NOT): " + !(5>5))

