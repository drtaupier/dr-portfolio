import { UI } from './classes';
const ui = new UI();
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const phone = document.getElementById('cellphone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || lastName === "" || phone === "" || email === "" || message === "") {
        ui.message('Todos los campos son obligatorios', 'msgError');
        return false;
    } else {
        ui.message('Gracias por contactarme, en breve me comunicaré con Ud.', 'success');
    }

})