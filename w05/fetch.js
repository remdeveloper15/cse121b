//Basicos en Fetch - Que es AJAX y Fecth?

//AJAX: solicitudes asincronicas

//AJAX son las iniciales de Asynchronous Javascript And Xml. Es una colleccion de tecnologias que permiten a una pagina web, hacer solicitudes de un server despes de que este haya cargado para obtener informacion adicional. Las solicitudes son Asincronicas en el sentido de que el programa que la realizo no espera sin hacer nada hasta que regresen, seguira adelante y hara mas cosas, las solicitudes se realizan con Javascript, pero ya no devuelcen XML con frecuencias, sino como JSON

//Promesas

//La naturaleza asincronico de las solicitudes son una bendcion y una maldicion. Una bendicion porque el desarrollador no tiene el contro acerca que tan rapido o lento responde el servidor. Asi que si la solicitud fue hecho de manera sincronica nada mas puede pasar hasta que la solicitud termine. Si el servidor por el que esperas es lento, puede hacer que tu aplicacion se muy lenta. asi que las solicitudes asincronicas permiten a nuestro codigo interactuar con fuentes externas sin dejar de tener rendimiento
//Sin embargo, es un poco diferente trabajar con la programación asincrónica. Tienes que lidiar con el hecho de que es posible que tu código no se ejecute en el orden en que lo escribiste. Esta es la maldición. Hay dos formas principales de abordar esto. Una de la que hemos hablado antes... Las callback functions. Se han utilizado desde hace un tiempo, pero a menudo conducen a un código que es realmente difícil de seguir... el infierno de las callback functions es como a menudo se le llama.

//El método más nuevo para escribir código asincrónico es Promises . Básicamente, las promesas nos dan otra forma de decir "cuando termines lo tuyo... thenhaz lo siguiente". La mejor manera de entenderlos es viéndolos en la práctica. Por suerte para nosotros, la recuperación utiliza promesas.

//Ejemplo

//Usaremos fetch para agregar algo de data de una API remota (Aplicattion Programming Interface). Una API es escencialemente que sucede cuando una organizacion decide exponer parte de un programa de su perteneciencia para el mundo. Porque harian algo asi? Bueno. Vamos a tomar a Calendly por ejemplo. Esto es una aplicacion de horarios online. Un estudiante puede ir e iniciar una reunion con su instructor de manera rapida con esto. La universidad usa Microsoft Exchange para el calendario. Si algo no aparece allí... lo extrañaré. Afortunadamente Exchange tiene una API. A través de esta API, Calendly puede iniciar sesión en mi cuenta de Exchange y agregar cosas directamente a mi calendario si le doy permiso. 
//Entonces, tan pronto como un estudiante se registra para una cita en Calendly, la cita se agrega automáticamente a mi calendario. Este es un ejemplo de cuando una API es muy útil.

//Usaremos una API gratuita bastante simple llamada pokeapi . Si visitas esa web encontrarás la documentación sobre cómo solicitar datos y ejemplos. Usemos el ejemplo que tiene para extraer información sobre Pokémon Ditto.

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'; 
//const results = fetch(url);
//console.log(results);

//Están sucediendo muchas cosas en esa simple línea de código. Con él realizamos una solicitud de información específica desde un servidor remoto. Verifique la consola y encontrará, sin embargo, que aún no hemos obtenido la información. Tal como se mencionó anteriormente, la recuperación devuelve una Promesa. De forma predeterminada, Javascript no esperará a que finalice una Promesa antes de pasar a la siguiente línea. Esto puede causar grandes problemas si la siguiente línea necesita los resultados de la Promesa para hacer su trabajo. Tomemos el siguiente ejemplo:

//doStuff(result);

//Javascript ejecutaría la línea con fetch. Los resultados se establecerían inicialmente en una Promesa. Entonces la ejecución pasaría inmediatamente a la línea  doStuff(results) El problema es que nuestra función espera que los resultados sean datos, NO una Promesa! No funcionará. Necesitamos una forma de retrasar la ejecución de doStuff(results) HASTA que finalice la búsqueda y se resuelva la Promesa.

//La forma mas sencilla de hacerlo es con async/await. Aunque tambien se puede hacer con el metodo .then(), el codigo async/await es mas legible en general y mas facil de seguir, por lo que usaremos ese metodo

//Entonces ¿Como usamos async/await? Primero, async/await solo se puede usar en funciones. Esto es muy importante. Primero debemos declarar la funcion como funcion asincronia con la palabra clase "asyncs" y luego colocar nuestro codigo dentro de ella. Esto no es un gran incoveninete ya que deberiamos haberlo puesto en una funcion de todos modos. 

//Una vez que hayamos hecho esto, podemos indicarle a Javascript que retrase el paso a la siguiente linea usando la palabra clase "await". Con el ejemplo anterior quedaria asi:

//async function getPokemon(url){
//    const results = await fetch(url);
//    doStuff(results);
//};

//getPokemon(url);

//Nos estamos acercando, pero nuestro ejemplo aun no esta completo. Resulta que "fetch" inicialmente no devuelve datos utilizables. Devuelve lo que se conoce como flujo de datos. Ternemos que decirle a fetch lo que esperabamos, y pedirle que convierta la respuesta en el tipo de datos correcto. Los tres tipos que comprende son json(), (text() HTML y XML) y blob() (blob es cualquier cosa que no sea texto o json). Esperamos que JSON regrese de la API a la que realizamos la solicitud. Entones deberiamos convertirla a eso. 

let results = null
async function getPokemon(url){
    const response = await fetch(url);
    
    //Ahora verificamos si fetch fue ejecutada correctamente
    if (response.ok){
        const data = await response.json();
        doStuff(data);
    }
};

function doStuff(data){
    results = data;
    console.log("First: ", results);
}

getPokemon(url);
console.log("Second: ", results);

//Ejecute el código anterior y luego consulte la consola. Tenga en cuenta que el segundo console.log se ejecutó primero... luego el primero. Recuerde que en la programación asíncrona Javascript no espera a que todo termine antes de continuar. Si hubiéramos intentado usarlo resultsinmediatamente, habría fallado. En lugar de eso, controlamos la ejecución de funciones para asegurarnos de que resultsesté lista ANTES de usarla.