let free = false;

function entrada(time)
{
    let edad = prompt("Por favor, ingresa tu edad: ");

    if (edad >= 18)
    {
        if (time >= 2 && time < 7 && free == false)
        {
            alert("Adelante, pase.")
            free = true;
        }

        else 
        {
            alert("Puedes pasar, sin embargo debes pagar tu entrada.")
        }

    }

    else 
    {
        alert("Che, sos un pibe, no podes entrar >:(");
    }

}

entrada(2)
entrada(23)