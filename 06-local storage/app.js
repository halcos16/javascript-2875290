
/*let nombre = 'Alex'
let items = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
let pelicula = {
    id: 2,
        nombre: 'Cazadores del Arca Perdida',
        year: 1981,
        direccion: 'Steven Spielberg',
        protagonistas: ['Harrison Ford', 'Karen Allen', 'Paul Freeman'],
        genero: ['accion', 'aventura'],
        image: 'https://images.justwatch.com/poster/300765484/s166/indiana-jones-en-busca-del-arca-perdida.webp'
}

function agregarStorage (key, value) {
    if(typeof value === 'string'){
        localStorage.setItem(key,value)
    }else{
        localStorage.setItem(key,JSON.stringify(value))
    }
    
}

agregarStorage('nombre', nombre)
agregarStorage('carrito', items)
agregarStorage('pelicula', pelicula)

function obtenerDatos (){
    let nombreUsuario = localStorage.getItem('nombre')
    let carritoUsuario = JSON.parse(localStorage.getItem('carrito'))
    let peliculasUsuario= JSON.parse(localStorage.getItem('peliculas'))

    console.log(carritoUsuario, typeof carritoUsuario)
    carritoUsuario.forEach(element => {
        console.log(items)
    });
}

obtenerDatos()

function borrarItem (item){
    localStorage.removeItem(item)
}*/

/*borrarItem ('pelicula')
borrarItem ('nombre')
borrarItem ('carrito')*/

/*function borrarTodo () {
    localStorage.clear()
}
borrarTodo()*/

let usuario = document.querySelector('.nombre');
let password = document.querySelector('contraseña');
let formulario = document.querySelector('form');