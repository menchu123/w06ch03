require("dotenv").config();
require("./database/index");
const inquirer = require("inquirer");
const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 5000;

initializeServer(port);