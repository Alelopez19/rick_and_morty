require('dotenv').config();
const express = require('express');
const router = require('./routes/index')
const morgan = require('morgan');
const cors = require('cors');
const {conn: sequelize} = require('./DB_connection')

const server = express();
const PORT = process.env.PORT || 3001;


server.listen(PORT, async() => {
    await sequelize.sync({force: true});
    console.log('Server raised in port', PORT)
});
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());


server.use('/', router);