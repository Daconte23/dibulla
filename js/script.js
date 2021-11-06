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


