module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        dadJoke: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fandom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isIntrovert: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        pronounceGif: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Profile.associate = function(models) {
        // We're saying that a Profile should belong to an Author
        // A Profile can't be created without an Author due to the foreign key constraint
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Profile;
};