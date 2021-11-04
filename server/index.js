const chalk = require("chalk");
const debug = require("debug")("cosas:server");
const express = require("express");
const morgan = require("morgan");
const { notFoundErrorHandler, generalErrorHandler } = require("./error");
const cosasRoutes = require("./routes/cosasRoutes");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.yellow(`Escuchando en el puerto ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Ha habido un error al iniciar el servidor."));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`El puerto ${port} está en uso.`));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());
app.use("/cosas", cosasRoutes);

app.use(notFoundErrorHandler);
app.use(generalErrorHandler);

module.exports = initializeServer;
