//Import npm packages

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./routes/api');


//Data Parsing
app.use(express.json());
app.use(express.urlencoded( {extended:false} ));

//HTTP request logger
app.use(morgan('tiny'));

app.use('/',routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
