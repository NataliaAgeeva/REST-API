const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const usersRouters = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes.all('/*', (req, res) => {
//  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
//});

app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRouters);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 3000');
});
