document.addEventListener('DOMContentLoaded', function() {
    const crearBtn = document.querySelector('.crear');
    const limpiarBtn = document.querySelector('.limpiar');
    const listaTareas = document.querySelector('.lista-tareas');
    const inputTarea = document.querySelector('.texto');

    crearBtn.addEventListener('click', function() {
        const tareaTexto = inputTarea.value.trim();

        if (tareaTexto !== '') {
            const tarea = document.createElement('div');
            tarea.className = 'tarea';
            tarea.innerHTML = `
                <span>${tareaTexto}</span>
                <button class="borrar-btn">X</button>
            `;
            listaTareas.appendChild(tarea);
            inputTarea.value = '';

            // Agregar evento para tachar tarea al hacer click
            tarea.addEventListener('click', function() {
                tarea.classList.toggle('tachado');
            });

            // Agregar evento para borrar tarea
            const borrarBtn = tarea.querySelector('.borrar-btn');
            borrarBtn.addEventListener('click', function(event) {
                event.stopPropagation(); // Evitar que se propague el evento click del div tarea
                tarea.remove();
            });
        }
    });

    limpiarBtn.addEventListener('click', function() {
        listaTareas.innerHTML = ''; // Limpiar todas las tareas
    });
});