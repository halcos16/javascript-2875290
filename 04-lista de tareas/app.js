const inputTexto = document.querySelector('.texto');
    const botonCrear = document.querySelector('.crear');
    const botonLimpiar = document.querySelector('.limpiar');
    const listaTareas = document.querySelector('.lista-tareas');


function crearTarea() {

    const nuevaTarea = document.createElement('div');
    const textoTarea = document.createElement('span');
    const botonBorrar = document.createElement('button');

    nuevaTarea.classList.add('tarea');
    textoTarea.textContent = inputTexto.value;
    botonBorrar.textContent = 'X';

    botonBorrar.onclick = function() {
    nuevaTarea.remove();
    };

    nuevaTarea.onclick = function() {
        if (textoTarea.style.textDecoration === 'line-through') {
            textoTarea.style.textDecoration = 'none';
            
        } else {
            textoTarea.style.textDecoration = 'line-through';
        }
    };

    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonBorrar);
    listaTareas.appendChild(nuevaTarea);

    inputTexto.value = '';
}

function limpiarTareas() {
    listaTareas.innerHTML = '';
}

botonCrear.addEventListener('click', crearTarea);
botonLimpiar.addEventListener('click', limpiarTareas);