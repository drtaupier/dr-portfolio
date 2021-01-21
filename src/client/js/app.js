import { UI, Formularios } from "./classes";
const ui = new UI();
const formulario = new Formularios();
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (
    nombre === "" ||
    apellido === "" ||
    telefono === "" ||
    email === "" ||
    message === ""
  ) {
    ui.message("All fields are required", "msgError");
    return false;
  } else {
    ui.message(
      "Thank you for contacting me, I will contact you shortly.",
      "success"
    );
    formulario.cleanForm();
    postData("/message", {
      nombre,
      apellido,
      telefono,
      email,
      message,
    });
  }
});

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST", //*GET, POST, PUT, DELETE, etc.
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    //Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("Error: ", error);
  }
};
