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
  Message.find(
    { estado: true },
    "nombre apellido telefono email message estado date_message"
  )
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

app.get(
  "/message/eliminados",
  [verificaToken, verificaAdminRole],
  (req, res) => {
    let desde = req.query.desde || 0;
    let limite = req.query.limite || 5;
    desde = Number(desde);
    limite = Number(limite);
    Message.find(
      { estado: false },
      "nombre apellido telefono email message estado date_message"
    )
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

        Message.count({ estado: false }, (err, conteo) => {
          res.json({
            ok: true,
            message,
            total: conteo,
          });
        });
      });
  }
);

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
app.delete("/message/:id", [verificaToken, verificaAdminRole], (req, res) => {
  let id = req.params.id;
  let cambioEstado = {
    estado: false,
  };
  Message.findByIdAndUpdate(
    id,
    cambioEstado,
    { new: true },
    (err, mensajeEliminado) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      if (!mensajeEliminado) {
        return res.status(400).json({
          ok: false,
          error: {
            message: "Mensaje no encontrado",
          },
        });
      }
      res.json({
        ok: true,
        mensaje: mensajeEliminado,
      });
    }
  );
});

module.exports = app;
