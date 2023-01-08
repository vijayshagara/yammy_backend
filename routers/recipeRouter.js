const express = require("express");
const router = express.Router();
const recipeModules = require("../modules/recipeModule");

//GET ROUTER
router.get("/get", recipeModules.get);

//CREATE ROUTER
router.post("/post", recipeModules.post);

//EDIT ROUTER
router.put("/update/:id", recipeModules.put);

//DELETE ROUTER
router.delete("/delete/:id", recipeModules.delete);

//GET BY ID ROUTER
router.get("/get/:id", recipeModules.getById);

module.exports = router;
