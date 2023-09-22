const Sequelize = require("sequelize");
const { Op } = Sequelize;
const Country = require("../model/country.model");
const Capital = require("../model/capital.model");








async function create(req, res) {

    await Country.bulkCreate([{
        countryName: "TamilNadu"
    }, {
        countryName: "Kerala"
    }, {
        countryName: "Karnataka"
    },

    ])

    await Capital.bulkCreate([{
        capitalName: "Chennai"
    }, {
        capitalName: "Thiruvananthapuram"
    }, {
        capitalName: "Bengaluru"
    }
    ])


    // const country = await Country.create({
    //     countryName: "Uttar Pradesh"
    // })

    // const capital = await Country.createCapital({
    //     capitalName: "Lucknow"
    // }
    // )
    return res.status(200).json({ message: "capital" });
}




async function read(req, res) {

    // 1.
    // const country = await Country.findOne({ where: { countryName: "TamilNadu" } });
    // const capital = await Capital.findOne({ where: { capitalName: "Chennai" } });
    // country.setCapital(capital);

    // 2.
    // const capital = await Capital.findOne({ where: { capitalName: "Thiruvananthapuram" } });
    // const country = await Country.findOne({ where: { countryName: "Kerala" } });
    // capital.setCountry(country);

    // 3. 
    // const country = await Country.create({ countryName: "West Bengal" })
    // const capital = await country.createCapital({ capitalName: "Kolkata" })

    // 4.
    // const data = await Country.destroy({ where: { countryName: 'West Bengal' } })

    // 5.
    // const country = await Country.findByPk(1, { include: Capital });

    // 6.
    // const country = await Country.findOne({ where: { countryName: "West Bengal" } });
    // var getCapital = await country.getCapital();

    return res.status(200).json({ message: "success" });
}






module.exports = {
    create, read
}
