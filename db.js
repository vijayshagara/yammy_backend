const Sequelize = require("sequelize");

//TO CREATE DATA BASE
module.exports.dataBaseSequel = new Sequelize(
  "yammy",
  "postgres",
  "vijay123@G",
  {
    HOST: "localhost",
    PORT: "5432",
    dialect: "postgres",
  }
);
