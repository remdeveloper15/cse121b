const moviesElement = document.querySelector("#movies");

let moviesList = [];

const showMovies = (movies) => {
    
    movies.forEach(movie => {

        let art = document.createElement("article");
        
        let h1 = document.createElement("h1")
        let h3 = document.createElement("h3");

        let img = document.createElement("img");

        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let p6 = document.createElement("p");
        let p7 = document.createElement("p");
        let p3 = document.createElement("p");

        h1.textContent = movie.original_title;
        h3.textContent = movie.title;
        p1.textContent = `Title: ${movie.title}`;
        p2.textContent = `Original Title: ${movie.original_titletitle}`;
        p4.textContent = `Director: ${movie.director}`;
        p5.textContent = `Realease Date: ${movie.release_date}`;
        p6.textContent = `Duration: ${movie.running_time} min`;
        p7.textContent = `Rating Score: ${movie.rt_score}`;
        p3.textContent = `Description: ${movie.description}`;

        img.setAttribute("src", movie.image);
        img.setAttribute("alt", movie.original_title);
        art.appendChild(h1);
        art.appendChild(h3)
        art.appendChild(img);
        art.append(p1);
        art.append(p2);
        art.append(p4);
        art.append(p5);
        art.append(p6);
        art.append(p7);
        art.append(p3);

        moviesElement.appendChild(art);       
    });
}

async function getMovies(){
        const response = await fetch("https://ghibliapi.vercel.app/films");

        if (response.ok){
            moviesList = await response.json();
            showMovies(moviesList);
        }
}

const reset = () => {
    moviesElement.innerHTML = ""; 
}

const filterMovies = (movies) => {
    reset();
    let filter = document.getElementById("filter").value;

    switch(filter)
    {
        case "action":
            showMovies(movies.filter(movie => movie.description.includes("Porco")));
            showMovies(movies.filter(movie => movie.description.includes("Eboshi")));
            showMovies(movies.filter(movie => movie.description.includes("Kumo")));
            showMovies(movies.filter(movie => movie.description.includes("Arrietty")));
            showMovies(movies.filter(movie => movie.description.includes("Laputa")));
            break;
            
        
        case "romantic":
            showMovies(movies.filter(movie => movie.description.includes("Sophie")));
            showMovies(movies.filter(movie => movie.description.includes("bathhouse")));
            showMovies(movies.filter(movie => movie.description.includes("Haru")));
            showMovies(movies.filter(movie => movie.description.includes("Shun")));
            showMovies(movies.filter(movie => movie.description.includes("Jiro")));
            break;

        case "drama":
            showMovies(movies.filter(movie => movie.description.includes("Toshio")));
            showMovies(movies.filter(movie => movie.description.includes("Shizuku")));
            showMovies(movies.filter(movie => movie.description.includes("Kokuriko")));
            showMovies(movies.filter(movie => movie.description.includes("A-6M")));
            showMovies(movies.filter(movie => movie.description.includes("Sanuki")));
            showMovies(movies.filter(movie => movie.description.includes("Marnie")));
            showMovies(movies.filter(movie => movie.description.includes("Earwig")));
            break;
           

        case "kids":
            showMovies(movies.filter(movie => movie.description.includes("Yamadas")));
            showMovies(movies.filter(movie => movie.description.includes("Totoros")));
            showMovies(movies.filter(movie => movie.description.includes("bathhouse")));
            showMovies(movies.filter(movie => movie.description.includes("Ponyo")));
            showMovies(movies.filter(movie => movie.description.includes("Haru")));
            showMovies(movies.filter(movie => movie.title.includes("Kiki's")));
            break;
            
        
        case "animals":
            showMovies(movies.filter(movie => movie.description.includes("raccoons")));
            showMovies(movies.filter(movie => movie.description.includes("Haru")));
            break;

        case "adults":
            showMovies(movies.filter(movie => movie.title.includes("Fireflies")));
            showMovies(movies.filter(movie => movie.description.includes("Takeo")));
            showMovies(movies.filter(movie => movie.description.includes("A-6M")));
            showMovies(movies.filter(movie => movie.title.includes("Turtle")));
            showMovies(movies.filter(movie => movie.description.includes("Sophie")));
            showMovies(movies.filter(movie => movie.description.includes("bathhouse")));
            break;
            
        case "all":
            showMovies(movies);
            break;

    }
}




getMovies();
document.querySelector("#filter").addEventListener("change", () => {filterMovies(moviesList)})