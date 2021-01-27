import { UI } from "./classes";

const ui = new UI();
window.onload = function () {
  ui.stickyNav();
  ui.footer();
  ui.navActive();

  getData("./getProjects", "{}");
};

const getData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST", //*GET, POST, PUT, DELETE, etc.
    credentials: "same-origin",
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    for (const index in newData.proyectos) {
      ui.projects(newData.proyectos[index]);
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
