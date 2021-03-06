module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    income: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE, allownull: true 
    }
  });


  Users.associate = function (models) {
    // Associating user with budget
    // When an user is deleted, also delete any associated budgets
    Users.hasMany(models.Budget, {
      onDelete: "cascade"
    });
  };

  return Users;


};