const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routers/tourRouter');

const app = express();

// Setting up midleware
// MORGAN
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// BODY PARSER
app.use(express.json());

// CREATING A STATIC FOLDER
app.use(express.static(`${__dirname}/public`));

// TOUR route
app.use('/tour', tourRouter);

module.exports = app;
