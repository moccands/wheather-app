// Setup empty JS object to act as endpoint for all routes

// Require Express to run server and routes

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// middleware
app.use(bodyParser.urlencoded( {extended:false}));
app.use(bodyParser.json())

const cors = require("cors")
app.use (cors());

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000
const server = app.listen(port, listening);
function listening(){
    console.log("serverrunning");
    console.log(`running on localhost: ${port}`);
};

// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

projectData = [];


// POST route

app.post('/meteo', weather);

// each time a client add an animal & a score data will be stored in data (la costant data)
function weather (req,res){
    console.log('got soemthing')
    let newData = req.body;
    let newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        userResponse: newData.userResponse
    }
    projectData.push(newEntry);
    console.log(newEntry);

};
