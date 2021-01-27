class UI {
  footer() {
    const today = new Date();
    const year = today.getFullYear();
    const footer = document.querySelector("footer");
    footer.innerHTML = `<h3>Windermere Fl. &copy; ${year}</h3>`;
  }

  stickyNav() {
    window.addEventListener("scroll", () => {
      const header = document.getElementById("header");
      let headerPositionTop = header.getBoundingClientRect().top;
      let positionY = window.scrollY;
      if (headerPositionTop < positionY) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
        header.style.transition = "all 0.3s";
      }
    });
  }

  message(mensaje, style) {
    const formulario = document.getElementById("form");
    const element = document.createElement("div");
    element.classList.add(style);
    element.innerHTML = `<h2>${mensaje}</h2>`;
    formulario.appendChild(element);
    setTimeout(() => document.querySelector(`.${style}`).remove(), 3000);
  }

  navActive() {
    window.addEventListener("scroll", function () {
      const navBar = document.querySelectorAll("nav ul li a");
      let fromTop = window.scrollY;
      navBar.forEach((link) => {
        let section = document.querySelector(link.hash);

        if (
          //offsetTop es la distancia desde cada seccion hasta la parte de arriba del viewport, mientras que offsetHeight es la altura de la seccion:
          section.offsetTop - 175 <= fromTop &&
          section.offsetTop + section.offsetHeight - 175 > fromTop
        ) {
          link.classList.add("listaActiva");
        } else {
          link.classList.remove("listaActiva");
        }
      });
    });
  }

  projects(proyectos) {
    const projects = document.querySelector(".projects");
    const element = document.createElement("div");
    element.classList.add("project");
    projects.appendChild(element);
    const imagen = document.createElement("div");
    imagen.classList.add("project-image");
    imagen.innerHTML = `<img src="img/${proyectos.imagen}">`;
    element.appendChild(imagen);
    const info = document.createElement("div");
    info.classList.add("projectInfo");
    info.innerHTML = `<h2>${proyectos.titulo}</h2>`;
    info.innerHTML += `<p>${proyectos.informacion}</p>`;
    element.appendChild(info);
  }
}

class Formularios {
  cleanForm() {
    setTimeout(() => {
      const form = document.querySelector("form");
      form.reset();
    }, 3000);
  }

  msgError(mensaje) {
    const section = document.querySelector("section");
    const element = document.createElement("div");
    element.setAttribute("id", "errorMsg");
    element.innerHTML = `<h2>${mensaje}</h2>`;
    section.appendChild(element);
    setTimeout(() => {
      document.querySelector("#errorMsg").remove();
    }, 3000);
  }

  deleteMsg() {
    //Este metodo es para que el mensaje no se pueda repetir al presionar varias veces Ingresar.
    const send = document.querySelector("#enviar");
    send.addEventListener("click", () => {
      const mensaje = send.parentElement.parentElement.nextElementSibling;
      if (mensaje) {
        mensaje.remove();
      }
    });
  }
}

module.exports = {
  UI,
  Formularios,
};
