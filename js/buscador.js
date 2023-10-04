let cursos = [
    {
        titulo: "html y css"
    },
    {
        titulo: "css"
    },
    {
        titulo: "javascript"
    },

    {
        titulo: "java"
    }

];


let buscador = document.querySelector("#buscador");
buscador.addEventListener("keyup", () => {
    //1.- guardar el valor del buscador
    let valor = buscador.value;
    //2.- filtrar array de cursos
    let cursosFiltrados = cursos.filter(curso => curso.titulo.indexOf(valor) > -1);
    //3.- limpiar resultados
    resultado.innerHTML = "";
    //4.- llenar resultados con los curso filtradoss
    cursosFiltrados.forEach((item) => {
        resultado.innerHTML += `       
     
        <p>${item.titulo}<p>
   `
    })
});