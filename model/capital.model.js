const Sequelize = require("sequelize");

const db = require("../config/db");

const capitalSchema = {
    capitalName: {
        type: Sequelize.DataTypes.STRING,
        unique: true
    }
}


const Capital = db.define("capital", capitalSchema, {
    timestamps: false
});



module.exports = Capital;