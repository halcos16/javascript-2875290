
//console.log (peliculas[22].genero[1]
/*peliculas.forEach(element => {
    console.log(element)
});*/

const contenedor = document.querySelector('.container')

peliculas.forEach(element => {
    let card =  document.createElement('div');
    
    card.innerHTML = `
    <section class="tarjeta">
        <div class="contenedor">
            <img src="${element.image}">
            <div class="name">Nombre: ${element.nombre}</div>
            <div class="direct">Director: ${element.direccion}</div>
            <div class="prot">Protagonistas: ${element.protagonistas[0]}.</div>
            <div class="gen">Genero: ${element.genero[0]}</div>
            <div class="year">${element.year}</div>
        </div>
    </section>`
    
    contenedor.appendChild(card);
    
});

function redirigir() {
    window.location.href = "./registro.html";
}