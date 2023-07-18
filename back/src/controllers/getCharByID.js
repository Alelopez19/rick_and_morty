const axios = require('axios');
const {KEY, URL_BASE} = process.env;

const getCharById = (req, res) => {
    const {id} = req.params;

    axios.get(`${URL_BASE}/character/${id}`)
    .then(response => {
        const {id,name,gender,species,image} = response.data;
        res.status(200).json({id,name,gender,species,image})})
    .catch((error) => {
        res.status(500).json({error: error.message})
    });
};

module.exports = getCharById;