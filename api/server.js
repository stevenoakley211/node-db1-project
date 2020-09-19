const express = require("express");
const cors = require('cors')

const accountsRouter =require("../routers/accountsRouter")

const server = express();

server.use(express.json());
server.use(cors())
server.use('/accounts',accountsRouter)

module.exports = server;
