const express = require("express");
const app = express();

app.post("/getProjects", (req, res) => {
  readJSONFile("./src/server/projects.json", function (err, json) {
    if (err) {
      throw err;
    }
    res.send(json);
  });
});

function readJSONFile(filename, callback) {
  require("fs").readFile(filename, function (err, data) {
    if (err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch (exception) {
      callback(exception);
    }
  });
}

module.exports = app;
