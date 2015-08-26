var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    text: {
      type: String
    },
    created: {
      type: Date
    },
    completed: {
      type: Boolean
    }
});

module.exports = mongoose.model('Item', itemSchema);