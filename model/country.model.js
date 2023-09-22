const Sequelize = require("sequelize");
const db = require("../config/db");



const countrySchema = {
    countryName: {
        type: Sequelize.DataTypes.STRING,
        unique: true
    }
}


const Country = db.define("country", countrySchema, {
    timestamps: false
});




module.exports = Country;