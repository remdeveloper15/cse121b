/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Helaman Franco",
    photo:  "images/placeholder1.jpg",
    favoriteFoods: [
        "Rice",
        "Pizza",
        "Coco",
        "Lettuce",
        "Water"
    ],
    hobbies: [
        "Walk",
        "Read",
        "Play",
        "Sleep"
    ],
    placesLived: [
    ]
};

myProfile.placesLived.push(
    {
        place: "Ancon, Santa Elena",
        length: "1 year"
    }
);

myProfile.placesLived.push(
    {
        place: "Quito City, Pichincha",
        length: "2 months"
    }
)

document.querySelector("#name").textContent = myProfile.name;
document.querySelector("#photo").setAttribute('src', myProfile.photo);
document.querySelector("#photo").setAttribute('alt', myProfile.name);

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

myProfile.placesLived.forEach(place =>{
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt)
    document.querySelector("#places-lived").appendChild(dd)
    
})


/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


