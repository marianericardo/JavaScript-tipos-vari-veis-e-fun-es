// tipo de dado 
// booleanos 

// conversão implícita
// Acontece quando o javascript cnverte o numero em string
// e depois compara
// as 2 strings
const numero = 456;
const numeroString = Number("456");
console.log (numero === numeroString);
console.log(numero + numeroString);

// conversão explícita
// Number

let novonumero = Number(numeroString);
console.log(numero +novonumero);

// String
