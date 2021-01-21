const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
let rolesValidos = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no es un role valido",
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  lname: {
    type: String,
    required: [true, "The last name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "The e-mail is required"],
  },
  password: {
    type: String,
    required: [true, "The password is required"],
  },
  date_start: {
    type: Date,
    default: () => Date.now(),
  },
  role: {
    type: String,
    default: "USER_ROLE",
    enum: rolesValidos,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

//De esta manera hacemos que en los datos devueltos, no figure el password
usuarioSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

usuarioSchema.plugin(uniqueValidator, {
  message: "{PATH} debe ser unico",
});

module.exports = mongoose.model("Usuario", usuarioSchema);
