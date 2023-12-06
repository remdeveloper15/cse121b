/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    temples.forEach((temple) => {

        let art = document.createElement("article");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");

    h3.textContent = temple.templeName;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);
    art.appendChild(h3);
    art.appendChild(img);
    templesElement.appendChild(art);
})
}

/* async getTemples Function using fetch()*/

async function getTemples()
{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }

}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}


/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.getElementById("sortBy").value;

    switch(filter)
    {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;

        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < 1950));
            break;
            
        case "all":
            displayTemples(temples);
            break;

    }
}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)})