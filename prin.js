const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('clik', () => {
    contenedor.classList.toggle('active')
});