//Las variables establecen un dato, que con el tiempo puede cambiar o no c:

//Las variables siempre tienen un tipo de dato, algunos de estos son:
//-string
//-number
//-boolean
//-symbol //Nota el symbol no es un dato primitivo
//-null
//-NaN

//En el ejemplo la variable "pescado" contiene un string el cual es "aletas"
//Los strings se definen usando "" o ''
pescado = "aletas";

//En este ejemplo la variable "number" contiene un number el cual es "19"
//Los numbers se definen escribiendo unicamente el valor, sin comillas.
number = 19;

//En este ejemplo la variable "boleano" contiene un booelan el cual es "true"
//Los booleans se definen con la palabra "true" o "false", donde true es 1 y 0 es false.
boleano = true;

//En este ejemplo la variable "vacio" contiene un null el cual es "null"
//Los nulls son tipos de datos que estan vacias, o sin ningun valor. son diferentes de los Undefines, ya que los nulls intencionalmente no tienen valor, por lo cual no provocan error.
vacio = null;

//En el siguiente ejemplo tenemos dos variables, num1 y num2. num1 es un number el cual es "5" mientras que num2 es un string el cual es "pedro". Si multiplicamos num1 * num2, el resultado sera un dato de tipo NaN, cuyo significado es "Not is a Number". 
let num1 = 5;
let num2 = "pedro";
let num3 = num1 + num2;

//DECLARACION DE VARIABLES
//Existen 3 formas de declara una variable en JS. 
//var: var declara una variable en un alcance global, osea todo el codigo puede hacer uso de la variable.
//let: let declara el alcance de una variable solo en un bloque determinado, unicamente este bloque puede hacer uso de esta variable.
//const: conts declara una variable cuyo valor nunca va a cambiar.
let numero = 15;

//Una variable siempre debe estar declarada, ya se con var, let o const, y tiene que tener un valor. 
//Tanto let como var pueden modificarse.
var numero1 = 29;
numero1 = 25;
numero = 23;

//const tiene que declararse y definirse con un valor al mismo tiempo, de otra manera sera un error. Recuerda que una vez definido el valor de una variable de tipo const, ya no puede ser modificada.
const pi = 3.14;

