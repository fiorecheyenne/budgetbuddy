module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Users;
};