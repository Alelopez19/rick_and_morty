const axios = require('axios');
const {KEY, URL_BASE} = process.env;

const successHandler = (response, res) => {
    const {id, name, gender, species, image} = response.data;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({id,name,gender,species,image}))
}

const errorHandler = (error, res) => {
    res.writeHead(500, {'Content-Type': 'text/plain'})
    res.end(JSON.stringify(error.message)); 
}

const getCharById = (res, id) => {
    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => successHandler(response, res))
    .catch((error) => errorHandler(error, res));

};

module.exports = getCharById;