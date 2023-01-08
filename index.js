const { json } = require("express");
const express = require("express");
const PORT = 9000;
const table = require("./db.config");
const recipeRouter = require("./routers/recipeRouter");
const app = express();

//JSON INBUILD MIDDLEWARE
app.use(json());

//DB FUNCTION CALL
table.toCreateTable();

//MIDDLEWARE FOR CRUD
app.use("/recipe", recipeRouter);

//PORT LISTENING
app.listen(PORT, (err) => {
  if (err) {
    console.log(`${9000} run with ${err}`);
  } else console.log(`backend running on ${PORT}`);
});
