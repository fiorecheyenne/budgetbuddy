module.exports = function(sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
      
      
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },

      category: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },

      amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        
      }

    });
  
   Budget.associate = function(models) {
      // We're saying that a budgett should belong to an user
      // A Budget can't be created without an User due to the foreign key constraint
      Budget.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Budget;
  };
  