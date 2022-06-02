const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.recordsPath = "/api/records";
    this.cartPath = "/api/cart";
    this.middlewares();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }

  middlewares() {
    // CORS
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.recordsPath, require("../routes/records"));
    this.app.use(this.cartPath, require("../routes/cart"));
  }
}

module.exports = Server;
