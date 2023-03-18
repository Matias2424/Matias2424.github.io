
const parentContainer =  document.querySelector('.rigth_side');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('leer-mas-boton');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.leer-mas');

    currentText.classList.toggle('leer-mas--show');

    current.textContent = current.textContent.includes('leer-mas') ? "leer-menos..." : "leer-mas...";

})