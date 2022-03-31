const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  blogTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  blogText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  sequelize,
  //timestamps true for date posted?
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "post",
});

module.exports = Post;
