const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let messageSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  apellido: {
    type: String,
    required: [true, "El apellido es requerido"],
  },
  telefono: {
    type: String,
    required: [true, "El telefono es requerido"],
  },
  email: {
    type: String,
    required: [true, "El e-mail es requerido"],
  },
  message: {
    type: String,
    required: [true, "El mensaje es requerido"],
  },
  date_message: {
    type: Date,
    default: () => Date.now(),
  },
  estado: {
    type: String,
    default: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);
