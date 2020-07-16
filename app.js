const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '5f103d07a5bb9e03e0f861b6',
  };
  next();
});

app.use('/', require('./routes'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 3000');
});
