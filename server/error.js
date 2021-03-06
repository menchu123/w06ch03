const debug = require("debug")("cosas:errors");

const notFoundErrorHandler = (req, res) => {
  res.status(404).json({ error: "New phone who dis (endpoint not found)" });
};

// eslint-disable-next-line no-unused-vars
const generalErrorHandler = (error, req, res, next) => {
  debug("Se ha liado: ", error.message);
  const message = error.code ? error.message : "Errorsito";
  res.status(error.code || 500).json({ error: message });
};

module.exports = {
  notFoundErrorHandler,
  generalErrorHandler,
};
