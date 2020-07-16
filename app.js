const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 3000');
});
