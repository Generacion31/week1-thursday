//FUNCIONES

// En JS una funcion agrupa un conjunto de intrucciones y las ejecutarla cuando es necesario

/**
 * SINTAXIS
 *
 * function nombreDeLaFuncion(parametros){
 *    intrucciones
 * }
 *
 * function => es una palabra reservada
 * nombreDeLaFuncion => es el nombre como tal de la funcion
 * parametros => Pueden ir, como no pueden ir . Es decir que no son obligatorios
 *
 */
// Declaracion la funcion
function saludar() {
  console.log("Hola, soy la primer funcion que escribes");
}

//Llamar la funcion

saludar() // <=Ejecucion de la funcion

// FUNCIONES => ALCANCE DE LAS VARIABLE

//¿QUE ES EL SCOPE? es el alcance de las variables

function alcanceLocal() {
  const variableLocal = 'Esto es una variable de alcance local'
  console.log(variableLocal);
}

alcanceLocal() //'Esto es una variable de alcance local'
//console.log(variableLocal);

// variables globales (de alcance global)
const name = 'Daniel'

function saludar2() {
  console.log(name);
}

saludar2()


// FUNCIONES CON PARAMETRO
// Parametro es uno o varios valores listados y separados por coma , y todo esto lo pasaremos dentro de los parentesis de la funcion

function sumar(num1, num2) { // num1 y num2 son parametros de la funcion sumar
  console.log(num1 + num2);
}
sumar(3, 6) //debo pasar los argumento de la funcion //9
sumar(5, 3) //8
sumar(1, 2) //3


//FUNCIONES CON VALORES PREDETERMINADOS

function multiplicarNumero(num = 6, mult = 1) {
  console.log(num * mult); // 6*1
}

multiplicarNumero()//6
multiplicarNumero(4, 2)//8
multiplicarNumero(4)//4

const test = multiplicarNumero(4)//4
console.log(test); // undefined

// FUNCIONES => RETORNANDO UN VALOR

function resta(num1, num2) {
  return num1 - num2
}

const restaDeNumeros = resta(10, 1)
console.log(restaDeNumeros); //9


/////////// 
const nombre = "Cristyan"

function saludo(nombre) {
  return `Hola me llamo ${nombre}`
}

const saludo1 = saludo(nombre)
console.log(saludo1);