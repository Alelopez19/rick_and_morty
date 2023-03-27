const axios = require('axios');
const {KEY, URL_BASE} = process.env;

const successHandler = (response, res) => {
    const {image, name, gender, status, origin, species} = response.data;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({name, gender, status, origin, species, image}))
}

const errorHandler = (error, res) => {
    res.writeHead(500, {'Content-Type': 'text/plain'})
    res.end(JSON.stringify(error.message)); 
}
const getCharDetail = (res, id) => {
    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => successHandler(response, res))
    .catch((error) => errorHandler(error, res));
};

module.exports = getCharDetail;
