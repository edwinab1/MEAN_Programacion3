const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
   icon: String,
   name: String,
   country: String,
   main: String,
   description: String,
   temp: Number,
   pressure: Number,
   humidity: Number,
   minTemp: Number,
   maxTemp: Number,
});

module.exports  = mongoose.model('History', HistorySchema);


