export class UI {
    footer() {
        const today = new Date();
        const year = today.getFullYear();
        const footer = document.getElementById('footer');
        footer.innerHTML = `<h3>David Rivera Taupier</h3>`;
        footer.innerHTML += `<h2>Copyright &copy; ${year}</h2>`;
    }

    stickyNav() {
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            let headerPositionTop = header.getBoundingClientRect().top;
            let positionY = window.scrollY;
            if (headerPositionTop < positionY) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
                header.style.transition = 'all 0.3s';
            }
        })
    }

    message(mensaje, style) {
        const formulario = document.getElementById('form');
        const element = document.createElement('div');
        element.classList.add(style);
        element.innerHTML = `<h2>${mensaje}</h2>`;
        formulario.appendChild(element);
        setTimeout(() => document.querySelector(`.${style}`).remove(), 3000);
    }
}