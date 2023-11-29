let cantidad = prompt("¿Cuantos alumnos son? ");
let alumnos = [];

for (i = 0; i < cantidad; i++)
{
    alumnos[i] = [prompt("Nombre del alumno" + (i + 1)), 0]
}

const asistencia = (nombre, p) => {
    let precensia = prompt(nombre);
    if (precensia == "P" || precensia == "p")
    {
        alumnos[p][1]++;
    } 
}

for (i = 0; i < 30; i++)
{
    for (alumno in alumnos)
    {
        asistencia(alumnos[alumno][0], alumno)
    }
}

for (alumno in alumnos)
{
    let resultado = `${alumnos[alumno][0]}<br>
    _______Presentes: ${alumnos[alumno][1]}<br>
    _______Ausentes: ${30 - parseInt(alumnos[alumno][1])}
    `
    
    if (30 - alumnos[alumno][1] > 18)
    {
        resultado += "Reprobado por inasistencia<br><br>"
    }

    else 
    {
        resultado += "<br><br>"
    }

    document.write(resultado)
}