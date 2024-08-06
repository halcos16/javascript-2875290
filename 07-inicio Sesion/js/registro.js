const formulario = document.querySelector('.datos')
const username = document.querySelector('.name')
const contraseña = document.querySelector('.password')

function registroUser(e) {
    e.preventDefault();

    let user = {
        nombre: username.value,
        userPass: contraseña.value,
    }

    localStorage.setItem ('user', JSON.stringify(user))
    formulario.reset();

}
formulario.addEventListener('submit',registroUser)