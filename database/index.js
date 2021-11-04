const mongoose = require("mongoose");
const chalk = require("chalk");
const debug = require("debug")("cosas:database");

const dataBaseProduction = process.env.MONGODB_STRING;
const dataBasePruebas = process.env.MONGODB_STRING_PRUEBAS;

const dataBase = (dataBaseString) => {
  mongoose.connect(
    dataBaseString === "produccion" ? dataBaseProduction : dataBasePruebas,
    (error) => {
      if (dataBaseString === "produccion") {
        debug(chalk.green("tamo produsiendo"));
      } else if (dataBaseString === "pruebas") {
        debug(chalk.green("tamo probando"));
      }
      if (error) {
        debug(chalk.red("La db no funksiona"));
        debug(chalk.red(error.message));
      }
    }
  );
};

module.exports = dataBase;
