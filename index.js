require("dotenv").config();
require("./database/index");
const inquirer = require("inquirer");
const initializeServer = require("./server/index");
const dataBase = require("./database/index");

(async () => {
  const answers = await inquirer.prompt([
    {
      name: "port",
      type: "input",
      message: "¿En qué puerto quieres que se inicie la API?",
      default: 4000,
    },
    {
      name: "database",
      type: "list",
      message: "¿Qué base de datos quieres usar?",
      choices: [
        {
          name: "Pruebas",
          value: "pruebas",
        },
        {
          name: "Producción",
          value: "produccion",
        },
      ],
      default: "produccion",
    },
    {
      name: "permits",
      type: "confirm",
      message:
        "¿Quieres permitir que los clientes puedan crear, borrar y modificar?",
      default: true,
    },
  ]);
  initializeServer(answers.port || process.env.SERVER_PORT || 5000);
  dataBase(answers.database);
})();
