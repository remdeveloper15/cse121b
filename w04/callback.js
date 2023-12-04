//CALLBACK FUNCTIONS

//Una callback function es una fuction que se pasa a otra funcion como argumento, que luego se llama dentro de la funcion externa para completar alguna accion. Un funcion que recibe como parametro otra funcion

function calculate(a, b, callback) {
    callback(a + b);
}
  
function displayResult(result) {
    console.log('The result is: ' + result);
    document.write(`The reslut is: ${result}`)
}

calculate(2, 3, displayResult);
