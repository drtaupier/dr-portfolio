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
        ui.message('All fields are required', 'msgError');
        return false;
    } else {
        ui.message('Thank you for contacting me, I will contact you shortly.', 'success');
        postData('/myContacts', { 'name': name, 'lastName': lastName, 'phone': phone, 'email': email, 'message': message });
    }
});

const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', //*GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        //Body data type must match "Content-Type" header
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('Error: ', error);
    }
}