const express = require("express");
const app = express();
const Message = require("../models/messageSchema");
const {
  verificaToken,
  verificaAdminRole,
} = require("../middlewares/authentication");

//GET
app.get("/message", [verificaToken, verificaAdminRole], (req, res) => {
  let desde = req.query.desde || 0;
  let limite = req.query.limite || 5;
  desde = Number(desde);
  limite = Number(limite);
  Message.find({ estado: true }, "date_message")
    .sort("date_message")
    .skip(desde)
    .limit(limite)
    .exec((err, message) => {
      if (err) {
        res.status(400).json({
          ok: false,
          err,
        });
      }

      Message.count({ estado: true }, (err, conteo) => {
        res.json({
          ok: true,
          message,
          total: conteo,
        });
      });
    });
});

//POST
app.post("/message", (req, res) => {
  const body = req.body;
  //Instanciando Schema
  let message = new Message({
    nombre: body.nombre,
    apellido: body.apellido,
    telefono: body.telefono,
    email: body.email,
    message: body.message,
  });
  //Guardando informacion en la DB
  message.save((err, messageDB) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      message: messageDB,
    });
  });
});

//PUT

//DELETE

module.exports = app;
