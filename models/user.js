const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      // eslint-disable-next-line no-useless-escape
      validator: (value) => /(https?:\/\/[wW{3}]?\.?[A-z0-9\-]{1,}\.?[A-z]{1,}\.[A-z]{2,11}(:\d{2,5})?\/?(([A-z0-9]+\/)*)?#?)|((https?:\/\/)(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d{2,5})?([A-z0-9\/]{1,}#)?)/.test(value),
      message: 'Некорректная ссылка',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
