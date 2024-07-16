const fondo = document.querySelector('.container')
const sol1 = document.querySelector('.sol')
const fantasma = document.querySelector('.guia')
const nubeUno = document.querySelector('.nube1')
const nubeDos = document.querySelector('.nube2')
const nubeTres = document.querySelector('.nube3')
const nubeCuatro = document.querySelector('.nube4')

function moversol1 (){
    sol1.style.animationName = 'ocultarse'
    sol1.style.animationDuration = '3s'
    sol1.animationTimingFunction = 'linear'
    sol1.animationIterationCount = 'infinite'
    fantasma.style.animation = 'move 3s linear'
    
}

function noche (){
    fondo.style.backgroundColor = 'black'
    fondo.style.transitionDuration = '5s'
    sol1.style.backgroundColor = 'white'
    
}

fantasma.addEventListener('click', moversol1)
fondo.addEventListener('click', noche)




