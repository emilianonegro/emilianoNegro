import scrollTopButton from "./dom/boton_scroll.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";


const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburguerMenu('.panel-btn','.panel','.menu a', '.menuClose');
    scrollTopButton('.scroll-top-btn');
})

const $knowMe = d.getElementById('knowMe');
const $main = d.getElementById('mainContent-imgUser');


$knowMe.addEventListener('mouseover',()=>{
    document.getElementsByClassName("line2")[0].style.transition = " 1.5s ease";
    document.getElementsByClassName("line2")[0].style.height = "0";
})

$main.addEventListener('mouseover',()=>{
    document.getElementsByClassName("line2")[0].style.transition = " 1.5s ease";
    document.getElementsByClassName("line2")[0].style.height = "0";
})


// Function Writing my name 
let $name = d.getElementById('name');
let myName = 'Emiliano.';

let writing = (txt) => {
    let arrTxt = txt.split('');
    let i = 0;
    let print = setInterval(() => {
        $name.innerHTML += arrTxt[i];
        i++;
        if(i > arrTxt.length -1){
            clearInterval(print)
        }
    }, 175);
    
}

writing(myName);



//Add class to the button Know me

setTimeout(() => {
    let know = d.getElementById('knowMeTxt');
    know.classList.add('shake-horizontal');
}, 2000);



let animado = d.querySelectorAll('.animado');
let animado2 = d.querySelectorAll('.animado2');

function mostrarScroll() {
        let scrollTop = d.documentElement.scrollTop;
        for (let i = 0; i < animado.length; i++) {
            let alturaAnimado = animado[i].offsetTop;
            if (alturaAnimado - 600 < scrollTop) {
                animado[i].style.opacity = 1;  
                animado[i].classList.add('swing-in-left-fwd');  
            }           
        }
        for (let i = 0; i < animado2.length; i++) {
            let alturaAnimado = animado2[i].offsetTop;
            if (alturaAnimado - 600 < scrollTop) {
                animado2[i].style.opacity = 1;  
                animado2[i].classList.add('jello-horizontal');
            }           
        }
}

window.addEventListener('scroll', mostrarScroll);