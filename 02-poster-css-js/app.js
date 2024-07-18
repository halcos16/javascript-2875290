const reproducir = document.querySelector(".play");
const contenedor = document.querySelector(".container");
const luna = document.querySelector(".luna");
const spider = document.querySelector(".araña");
const goblin = document.querySelector(".goblin");
const nube1 = document.querySelector(".nubenegra");
const nube2 = document.querySelector(".nubenegra2");
const nube3 = document.querySelector(".nuberosa");

function correr () {
    contenedor.style.animationPlayState = 'running';
    luna.style.animationPlayState = 'running';
    spider.style.animationPlayState = 'running';
    goblin.style.animationPlayState = 'running';
    nube1.style.animationPlayState = 'running';
    nube2.style.animationPlayState = 'running';
    nube3.style.animationPlayState = 'running';
}

reproducir.addEventListener('click', correr)