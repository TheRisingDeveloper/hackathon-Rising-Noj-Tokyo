const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recruiters extends Model { }

Recruiters.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "recruiters",
        timestamps: true,
    }
);

module.exports = Recruiters;
