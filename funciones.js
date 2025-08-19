//Se usan parametros para especificar (a, b) de esta manera los valores pueden cambiar


function sumar(a, b) {
    console.log("hola desde sumar");  
    return a + b 
}

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