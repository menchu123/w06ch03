const { Schema, model } = require("mongoose");

const cosaSchema = new Schema({
  cosa: {
    type: String,
    required: true,
  },
});

const Cosa = model("Cosa", cosaSchema, "cosas-que-se");

module.exports = Cosa;
