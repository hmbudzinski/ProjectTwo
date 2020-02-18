// var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var Fandom = sequelize.define('Fandom', {
        // Giving the User model a name of type STRING
        fandoms: {
            type: DataTypes.STRING,
            allowNull: false
        },
        relationship: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dadJoke: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cosplay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gif: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    // // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    // User.prototype.validPassword = function(password) {
    //     return bcrypt.compareSync(password, this.password);
    // };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    // User.addHook('beforeCreate', function(user) {
    //     user.password = bcrypt.hashSync(
    //         user.password,
    //         bcrypt.genSaltSync(10),
    //         null
    //     );
    // });

    // User.associate = function(models) {
    //     // Associating User with Posts
    //     // When an User is deleted, also delete any associated Posts
    //     User.hasMany(models.Profile, {
    //         onDelete: 'cascade'
    //     });
    // };

    return Fandom;
};