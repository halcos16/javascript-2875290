const username = document.querySelector('.name');
const contraseña = document.querySelector('.password');
const btnregistro = document.querySelector('.registro');
const formulario = document.querySelector ('.datos')

function registroUser(e) {
    e.preventDefault();

    let user = {
        nombre: username.value,
        userPass: contraseña.value,
    }

    localStorage.setItem ('user', JSON.stringify(user));
    formulario.reset();

    window.location.href = 'inicio.html';

}
formulario.addEventListener('submit',registroUser);