const formulario = document.querySelector('.formulario')
const username = document.querySelector('.username')
const password = document.querySelector('.password')



//Inicio de sesión
function validarUsuario (e){
    e.preventDefault(); 

    let currentUser = JSON.parse( localStorage.getItem('user') )
    console.log(currentUser.userName)
    console.log(currentUser.userPass)

    console.log(Boolean(username.value === currentUser.userName)) ;
    console.log(Boolean(password.value === currentUser.userPass)) ;

    if(username.value === currentUser.userName && password.value === currentUser.userPass){
        console.log('Felicidades puedes entrar 🔥')
        window.location = "./userpage.html"
    }else{
        console.log('Sigue intentando')
    }

    formulario.reset()
}
formulario.addEventListener('submit',validarUsuario)













/* let nombre = 'José'
let items = ['uno','dos','tres','cuatro','cinco']
let pelicula = {
    id: 5,
    nombre: 'Tiburon',
    year: 1975,
    direccion: 'Steven Spielberg',
    protagonistas: ['Roy Scheider', 'Robert Shaw', 'Richard Dreyfuss'],
    genero: ['Aventura', 'Suspenso'],
    image: 'https://images.justwatch.com/poster/185348533/s166/tiburon.webp'
} */

/* function agregarStorage (key, value){
    if(typeof value === 'string'){
        localStorage.setItem(key,value)
    }else{
        localStorage.setItem( key,JSON.stringify(value) )
    }
} */

/* agregarStorage ('nombre', nombre)
agregarStorage ('carrito', items)
agregarStorage ('pelicula', pelicula) */

/* function obtenerDatos (){
    let nombreUsuario = localStorage.getItem('nombre') 
    let carritoUsuario =JSON.parse( localStorage.getItem('carrito') ) 
    let peliculaUsuario =JSON.parse( localStorage.getItem('pelicula') )
    
    console.log(carritoUsuario, typeof carritoUsuario)

    carritoUsuario.forEach(item => {
        console.log(item)
    });
} */

/* obtenerDatos () */

/* function borrarItem (item){
    localStorage.removeItem(item)
} */
/* borrarItem ('pelicula')
borrarItem ('nombre')
borrarItem ('carrito')
borrarItem ('name') */

/* function borrarTodo (){
    localStorage.clear()
}
borrarTodo () */