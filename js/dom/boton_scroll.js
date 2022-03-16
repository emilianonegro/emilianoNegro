const   d = document,
        w = window;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn),
    $contactFixed = d.getElementById('contactFixed');

    //scroll para saber a que distancia queremos mostrar u ocultar el boton
    w.addEventListener('scroll', () => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 300){ 
            $scrollBtn.classList.remove('hidden');
            $contactFixed.classList.add('opacity');

        }else{
            $scrollBtn.classList.add('hidden');
            $contactFixed.classList.remove('opacity');
        }
    });

    //capar el click en el boton y llevarnos nuevamente a la parte superior
    d.addEventListener('click', e => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: 'smooth',
                top: 0
            })
            
        }
    });
}