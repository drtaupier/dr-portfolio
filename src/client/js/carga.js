import { UI } from './classes';
const ui = new UI();
window.onload = function() {
    ui.stickyNav();
    ui.footer();
    ui.navActive();
}