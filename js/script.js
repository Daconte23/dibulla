const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

const cargarimagen = (entradas, onbservador) => {
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
}

const onbservador = new IntersectionObserver (cargarimagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
} );

onbservador.observe(imagen1);
onbservador.observe(imagen2);

const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const parrafo3 = document.getElementById('parrafo3');
const parrafo4 = document.getElementById('parrafo4');

const cargarparrafo = (entradas, onbservador) => {
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
}

const onbservador = new IntersectionObserver (cargarimagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
} );

onbservador.observe(parrafo1);
onbservador.observe(parrafo2);
onbservador.observe(parrafo3);
onbservador.observe(parrafo4);
