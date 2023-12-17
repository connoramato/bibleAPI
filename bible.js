const path = require("path");
const http = require("http");
const express = require("express");
const app = express(); /* app is a request handler function */
const portNumber = 5001;

const bible = require("./bibleCPDV"); 
/*const bible = (async () => {
    const biblejson = await fetch('bible.json');
    return await biblejson.json();
})();*/
const max_idx = bible.length;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.use(express.static(__dirname + '/'));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://bibleapi-xygf.onrender.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/random", async (request, response) => {
    let index = getRandomInt(max_idx);
    const verse = bible[index];
    response.json(verse);
});

app.listen(portNumber);