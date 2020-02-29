var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
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
            validate: {
                len: {
                    args: 3
                }
            }
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
            type: DataTypes.STRING,
            allowNull: false
        }
        // ,
        // userImage: {
        //     type: DataTypes.STRING
        // }
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.addHook('beforeCreate', function(user) {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    return User;
};