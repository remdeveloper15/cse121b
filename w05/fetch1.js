// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  const output = document.querySelector("#output")
  results = data;
  
  let salida = `<h2>${results.name}</h2>
               <img src="${results.sprites.front_default}" alt="Image of
                ${results.name}">`
  output.innerHTML = salida;  

  console.log("first: ", results);
}


async function getPokemonList(url){
    const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuffList(data);
  }
}


function doStuffList(data) {
    console.log(data);
    const outputList = document.querySelector("#outputList")
    const list = data.results;
    list.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        outputList.innerHTML += html;
    })
}
  
getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);

//Nuestra funcion doStuff del ejemplo de arriba es un poco decepcionante. Vamos a hacer mucho mas que simplemenete muestre los resultados en la consola. Realmente deberia desplegar la informacion que conseguio el usuario del navegador. Necesitamos una lista!

//1.Agrega un elemento a nuestro HTML para almacenar la informacion del pokemon algo como (Esto en HTML):

//<section id="output"></section>

//2. Get that element with javascript. (document.querySelector)



//En la funcion doStuff creamos una variable y construimos el html que queremos desplegar la informacion (Recomendamos que sea un strin :P)

//4.Inserte nuestro HTML in el elemento de salida (innerHTML)
