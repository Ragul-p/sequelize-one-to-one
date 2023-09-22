const express = require("express");
const route = express.Router();
const { create, read } = require("../controller/country.controller");

route.post("/create", create);
route.get("/read", read);





module.exports = route;