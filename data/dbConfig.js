const knex = require("knex");

const knexfile = require("../knexfile.js");



const database = "production";

module.exports = knex(knexfile[database]);
