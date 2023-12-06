//Modules

//Los modulos son una forma de organizar el codigo en archivos diferentes. Esto nos permite fragmentar el codigo en pequeñas piezas mas faciles de manejar. Tambien nos permite reusarlo en multiples lugares.

//Organizado - Intruduccion a las librerias con Modulos ES

//Librerias - compartiendo tus funciones con otros

//Una idea de oraganizacion en JavaScript es una libreria. Las librerias son una forma en la que puedes compartir tu codigo para que otros programadores lo puedan usar en sus codifos. Las librerias son grupos de funciones que, a diferencia de las aplicaciones, no pueden ser ejecutadas por si mismas. En lugar de eso, usamos lo que otra persona haya escrito y las usamos como si nosotros lo hubiesemos hecho.
//En JavaScript, las libretias consisten de un numero de archivos los cuales puede poner enn tu JavaScript. Por tradicion, los nombres de estos archivos siempre termian con 'js'. Si tenemos una libreria llamada "totally_awsome", y en ella estaba algun codifo que movia cosas alrededor de la panralla, podrimos poner ese codigo en un archivo llamado "animations.js". 

//Proposito

//El principal proposito de todo esto es el de encapsuplapsion, osea tartar de limitar el acceso a los archivos, permitiendo unicamente que los que lo necesiten lo usen.

//Modulos ES

//Las Librerias creadas como se describre anteriormente son simples de hacer, pero tienen algunos incovenientes. El mas importatne es que todo en ellas esta agregado con un scope global, con todas las desventajas que esto implica. En las version ES6 de JavaScript una nueva configuracion fue agreagada para resolcer este problema. 

//Datos sobre Modulos Es
//Los Modulos ES estan basado en los archivos, un modulo por archivo 
//Los Modulos son estrictos por defecto
//Los Modulos Es establecen su propia privacidad scope
//Cuaqlquier cosa a la que necesites accesar fuera del modulo de ser exportada. 
//Las exportaciones pueden ser por defecto (una por modulo) o nombrada (como tu lo necesites)
//Usamos el comando "import" para usar un modulo
//Cuando usamos los modulos ES necesitas hacer que el navegador lo sepa mediante la etiqueta 'type="modules"' 

//Ejemplo en HTML

//<script src="main.js" type="module"></script> 


//Ejemplos - Un modulo con una funciones util en comun

//Si tenemos un modulo simple con una utilidad de funcion púede verse algo asi

//filename: utility.js
//wrapper function for querySelector
export function qs(selector) {
    return document.querySelector(selector);
}

// create an alert at the top of the page for 3 seconds, requires the message to be displayed and the time in milliseconds

export function alertMessage(message, duration = 3000){
    const alert = document.createElement("p");
    alert.innerHTML = message;
    alert.setAttribute(
        "style",
        "background-color:lightpink; border: 1px solid red; position: absolute; top:0; left:0; right:0; padding: 1em;"
    );
    document.body.prepend(alert);
    setTimeout(function()
    {
        document.body.removeChild(alert); 
    }, duration);

}

//Para usar este modulo, prodiamos importar la funcion que queremos usar en nuestro archivo js principal.

// main.js...this is the file that you added to the html through a script tag
import { qs, alertMessage } from "./utilities.js";
// now you can use those functions just like if they were declared locally.
alertMessage("I'm from the module!");

//Mejores Practicas

//Este curso inteta enseñar muchas de las mejores practicas de JavaScript. Usando los Modulos Es para organizar tu codigo es una de de ellas. 
//1. Como hacer un modulo. El syntax no es my complejo, y los estudiantes usualmente no se complican mucho con la parte tecnica de creacion de modulos
//2. El Porque? o Cuando? de los modulos. Esto es mas dificil para programadores amaters, y aveces puede llegar a sentirse que el concepto de los Modulos o librerias se sienten dificiles de comprender.

//