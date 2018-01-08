const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    minlenght: 3,
    trim: true,
  },
});

module.exports = {
  User,
};
