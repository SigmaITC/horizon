const express = require('express');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient

/*MongoClient.connect('link-to-mongodb', (err, database) => {
  // ... start the server
})*/

// Define the port to run on
app.set('port', 3000);

const server = app.listen(app.get('port'), () => {
    console.log('listening on 3000')
});

console.log(path.join(__dirname, '../public'));

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/api", (req, res) => {
    req(options, (err, response, body) => {
        const json = JSON.parse(body);
        console.log(json); // Logging the output within the request function
        res.json(req.json) //then returning the response.. The request.json is empty over here
    }); //closing the request function
});
