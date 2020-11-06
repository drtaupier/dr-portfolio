export class UI{
    footer(){
        const footer = document.querySelector('footer');
        let today = new Date();
        let year = today.getFullYear();
        const element = document.createElement('div');
        footer.append(element);
        element.innerHTML = `<h3 class="fontNormal">Copyright &copy ${year} </h3>`;
    }

    stickyNav() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
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
}