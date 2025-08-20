
function sumar(a, b) {
    console.log("hola desde sumar");  
    return a + b 
}


//Se usan parametros para especificar (a, b) de esta manera los valores pueden cambiar


// let resultado = sumar(5, 100);
// console.log(resultado);

/** 
* Funcion para decodificar los conjuros del codice de hechiceria
* @param {string} simbolos
*/

function decodeSpell (simbolos) {
    let equivalencias = new Map();
        equivalencias.set("☽", 1);
        equivalencias.set("☾", 5);
        equivalencias.set("♁", 10);
        equivalencias.set("⚕", 50);
        equivalencias.set("⚡", 100);
        let resultado = 0;
        let temp = 0; 


    for(let i = 0; i < simbolos.length; i++) {
        let simbolo = simbolos[i];
        let valor= equivalencias.get(simbolo);
        let valorProximo = equivalencias.get(simbolos [i + 1]);
        if(valor === undefined) {
            return NaN; //Corrupto
        }

        if(valor < valorProximo) {
            valor = valor * -1;
        }

        resultado += valor;
    }
    return resultado;
}

decodeSpell('☽☽☽⚡♁☾♒') // 3


console.log(decodeSpell('☽☽☽')); // 3
console.log(decodeSpell('⚕.♒')); // NaN
console.log(decodeSpell('☽☾')); // 4 (5 - 1)
console.log(decodeSpell('☾☽')); // 6 (5 + 1)
console.log(decodeSpell('☾☽☽☽')); // 8 (5 + 3)
console.log(decodeSpell('☽☽☽⚡')); // 101 (1 + 1 + (100 - 1))


// decodeSpell('☽⚕') // 49 (50 - 1)
// decodeSpell('☽☽☾') // 5 (1 + (5 - 1))
// decodeSpell('☽☽☾⚡') // 95 (1 + (-1 + (100 - 5)))
// decodeSpell('☽⚕⚡') // 49 (-1 - 50 + 100)
// decodeSpell('⚡⚡⚡') // 300
// decodeSpell('⚕⚡') // 50
// decodeSpell('⚕.♒') // NaN



let texto = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas."


//substring ()
//substring extrae parte del texto rango
let nuevaCadena= texto.substring(50,100)
console.log(nuevaCadena)


//slice aparece lo que esta despues del numero que indiques
let otraCadena= texto.slice(100)
console.log(otraCadena)


/**
 * Funcion para contar cadenas de texto
 * @param {string} cadena
 * @param {string} separador
 * @returns {Array} array de valores
 */

function dividirTexto(cadena, separador) {
    return cadena.split(separador)
}

let numerosConComas = "1,2,3,4,5,6,7,8,9,10,11";


let valores = dividirTexto (numerosConComas, ",")
console.log(valores);
let totalPalabras = dividirTexto(texto, " ")
console.log(`Total de palabras: ${totalPalabras.length}`);


let nick = "@sara"
let validarNick = nick.startsWith ("@")
let respuesta = validarNick ? "SI" : "NO"

console.log('El nick del usuario es valido? ${respuesta}');


let contiene500Anios = texto.includes ("500 años")
console.log(`Si contiene?? ${contiene500Anios ? "SI":"NO"}`);


const calcularEdad = function(edad) {
    return edad >= 18;
}

console.log(calcularEdad(16)); 

const factorial = function fact (n) {
    if(n <= 1) return 1;
    return n * fact (n - 1) // 5 * 4 * 3 * 2 * 1
}

console.log (factorial(5)); // 5

// Funciones Tipo Flecha

const otra0peracionArrow = (a) => {
    console.log(a);
    return a * a
}

const light0peracionArrow = a => a * a;

const sumarArrow = (a, b) => a + b;

console.log(sumarArrow(20, 30));