const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const server = express();
server.get("/", (req, res) => {
  res.send({ id: "wqhidugh8832", username: "this is nodejs express" });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
