const Sequelize = require("sequelize");
const connection = require("../../db/connection");

const Category = connection.define("category", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Category.sync({ force: false });
module.exports = Category;
