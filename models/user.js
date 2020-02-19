var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        // Giving the User model a name of type STRING
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
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

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook('beforeCreate', function(user) {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    // User.associate = function(models) {
    //     // Associating User with Posts
    //     // When an User is deleted, also delete any associated Posts
    //     User.hasMany(models.Profile, {
    //         onDelete: 'cascade'
    //     });
    // };

    return User;
};