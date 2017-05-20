'use strict';
module.exports = function(sequelize, DataTypes) {
  var Designer = sequelize.define('Designer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    focus: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Designer;
};
