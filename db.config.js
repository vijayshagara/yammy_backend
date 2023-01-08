const Sequelize = require("sequelize");
const sequel = require("./db");

const db = {};
db.Sequelize = Sequelize;
db.sequel = sequel.dataBaseSequel;

//TO CREATE NEW TABLE
module.exports.toCreateTable = async () => {
  try {
    await db.sequel.sync();
  } catch (err) {
    console.log(err);
  }
};

//MODEL OF THE SCHEMA
module.exports.recipeData = db.sequel.define("recipes", {
  id: {
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  image: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  foodType: {
    allowNull: false,
    type: Sequelize.STRING,
    defaultValue: "",
    field: "food_type",
  },
  ingredient: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  stepToPrepare: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});
