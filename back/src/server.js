const http = require('http');
const data = require('./utils/data')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;

    if(url.includes('/rickandmorty/character/')){
        const id = url.split('/').at(-1);
        const character = data.find(char => char.id == id);

        if(character){
            res.end()
        }
    }
}).listen(3001, 'localhost')