const express = require("express");
const debug = require("debug")("cosas:things");
const Cosa = require("../../database/models/cosa");

const router = express.Router();

// const permits = require("../../index");

// debug(permits);

router.get("/", async (req, res) => {
  debug("Loading cosas");
  const cosas = await Cosa.find();
  res.json(cosas);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchedCosa = await Cosa.findById(id);
    if (searchedCosa) {
      res.json(searchedCosa);
    } else {
      const error = new Error("Cosa not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCosa = await Cosa.findByIdAndDelete(id);
    if (deletedCosa) {
      res.json(deletedCosa);
    } else {
      const error = new Error("Cosa not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

module.exports = router;
