const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const parrafo3 = document.getElementById('parrafo3');
const parrafo4 = document.getElementById('parrafo4');

const cargarparrafo = (entrades, observador) => {
    
    entrades.forEach((entrade) => {
        if(entrade.isIntersecting){
            entrade.target.classList.add('visible');
        }
    });
}

const observador = new IntersectionObserver (cargarparrafo,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
} );

observador.observe(parrafo1);
observador.observe(parrafo2);
observador.observe(parrafo3);
observador.observe(parrafo4);