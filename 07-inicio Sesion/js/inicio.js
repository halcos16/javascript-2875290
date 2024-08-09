const formulario = document.querySelector('.datos');
const username = document.querySelector('.name');
const contraseña = document.querySelector('.password');
const btningresar = document.querySelector('.boton');

function ingresoUsuario (e) {
    e.preventDefault();

    const ingresarNombre = username.value;
    const ingresarContraseña = contraseña.value;

    const datosUsuario = JSON.parse(localStorage.getItem('user'));

    if(datosUsuario && ingresarNombre === datosUsuario.nombre && ingresarContraseña === datosUsuario.userPass) {
        window.location.href = 'userpage.html';
        alert('Bienbenido, '+ ingresarNombre);
    } else {
        alert('Nombre o contraseña incorrectos');
    }
}

formulario.addEventListener('submit', ingresoUsuario);