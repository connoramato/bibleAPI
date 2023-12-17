const path = require("path");
const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express(); /* app is a request handler function */
const portNumber = 5001;

const bible = require("./bibleCPDV");
const max_idx = bible.length;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.use(express.static(__dirname + '/'));

app.get("/random", async (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', 'https://bibleverseguesser.onrender.com');
    //response.appendHeader('Access-Control-Allow-Origin', 'https://bibleverseguesser.onrender.com/play');
    let index = getRandomInt(max_idx);
    const verse = bible[index];
    response.json(verse);
});

app.listen(portNumber);