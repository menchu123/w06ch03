const express = require("express");
const debug = require("debug")("cosas:things");
const Cosa = require("../../database/models/cosa");

const router = express.Router();

router.get("/", async (req, res) => {
  debug("Loading cosas");
  const cosas = await Cosa.find();
  res.json(cosas);
});

module.exports = router;
