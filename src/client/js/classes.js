export class UI {
    footer() {
        const today = new Date();
        const year = today.getFullYear();
        const footer = document.getElementById('footer');
        footer.innerHTML = `<h3>David Rivera Taupier &copy; ${year}</h3>`;
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

    navActive() {
        window.addEventListener('scroll', function() {
            const navBar = document.querySelectorAll('nav ul li a');
            let fromTop = window.scrollY;
            navBar.forEach(link => {
                let section = document.querySelector(link.hash);

                if ( //offsetTop es la distancia desde cada seccion hasta la parte de arriba del viewport, mientras que offsetHeight es la altura de la seccion:
                    section.offsetTop - 175 <= fromTop && (section.offsetTop + section.offsetHeight) - 175 > fromTop) {
                    link.classList.add('listaActiva');
                } else {
                    link.classList.remove('listaActiva');
                }
            });

        });
    }

    slider() {
        const i = 0;
        let images = [];
        const time = 3000;

        //images list:
        images[0] = 'img/img4.png';
        images[0] = 'img/img5.png';
        images[0] = 'img/img6.png';

        function changeImg() {
            document.slide.src = images[i];
            if (i < images.length - 1) {
                i++;
            } else
                i = 0;
        }

        setTimeout("changeImg()", time);
    }

    prevSlide() {

    }

    nextSlide() {

    }
}