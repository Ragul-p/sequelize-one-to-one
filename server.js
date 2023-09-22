const express = require("express");
const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");
const app = express();
const port = process.env.PORT || 5000;
const Capital = require("./model/capital.model");
const Country = require("./model/country.model");

// 1.
// Country.hasOne(Capital);
// Capital.belongsTo(Country);

// 2.
// Country.hasOne(Capital, {
//     foreignKey: {
//         name: 'soccer',
//         type: Sequelize.DataTypes.INTEGER,
//         allowNull: false
//     }
// });

// 3.
// Country.hasOne(Capital, { onDelete: 'CASCADE' });
// Capital.belongsTo(Country, { onDelete: 'CASCADE' });


//4.
Country.hasOne(Capital, { onUpdate: 'CASCADE' });
Capital.belongsTo(Country, { onDelete: 'CASCADE' });

// Country.hasOne(Capital, { foreignKey: "soccer" }); // specify the foreign key name
// Country.hasOne(Capital, { onDelete: 'CASCADE' });   // {onUpdate:'CASCADE'}
// Capital.belongsTo(Country, { onDelete: 'CASCADE' });



const db = require("./config/db");
db.authenticate().then(function () { console.log("DB Connection Successful (:"); })
    .catch(function () { console.log("DB Connection Error !!!"); });


db.sync().then(function () { console.log("sync Table Successful (:"); })
    .catch(function () { console.log("sync Table Error !!!"); });



app.use("/api/country", require("./router/country.route"));



app.listen(port, function () {
    console.log(`server is listening on port ${port}`);
});
