const recipeData = require("../db.config");

//DATA READ MODULES
module.exports.get = async (req, res) => {
  try {
    const data = await recipeData.recipeData.findAll({});
    return res.send(data);
  } catch (error) {
    console.log(error);
  }
};

//DATA CREATE MODULES
module.exports.post = async (req, res) => {
  try {
    const post = await recipeData.recipeData.create({
      ...req.body,
    });
    return res.status(200).send(post);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

//DATA READ BY ID MODULES
module.exports.getById = async (req, res) => {
  try {
    const data = await recipeData.recipeData.findOne({
      where: { id: req.params.id },
    });
    return res.send(data);
  } catch (error) {
    console.log(error);
  }
};

//DATA EDIT MODULES
module.exports.put = async (req, res) => {
  try {
    const data = await recipeData.recipeData.update(req.body, {
      where: { id: req.params.id },
    });
    return res.send(data);
  } catch (error) {
    console.log(error);
  }
};

//DATA DELTE MODULES
module.exports.delete = async (req, res) => {
  try {
    const data = await recipeData.recipeData.destroy({
      where: { id: req.params.id },
    });
    return res.send(`DOcument has been deleted...`);
  } catch (error) {
    console.log(error);
  }
};
