export default function hamburguerMenu(panelBtn, panel, menuLink, menuClose) { 
    const d = document;

    d.addEventListener('click', (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`) || e.target.matches(menuClose)){
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelBtn).classList.toggle('is-active');
            d.querySelector(menuClose).classList.remove('is-active');

        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove('is-active');
            d.querySelector(panelBtn).classList.remove('is-active');
        }
    })
 }