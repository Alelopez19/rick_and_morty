require('dotenv').config();
const express = require('express');
const router = require('./routes/index')
const morgan = require('morgan');
const cors = require('cors')

const server = express();
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log('Server raised in port', PORT)
});
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());


server.use('/', router);