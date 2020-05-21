export class UI {
    footer() {
        const today = new Date();
        const year = today.getFullYear();
        const footer = document.getElementById(footer);
        footer.innerHTML = `<h3>David Rivera Taupier</h3>`;
        footer.innerHTML += `<h2>Copyright &copy; ${year}</h2>`;
    }
}