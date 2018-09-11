const mongoose = require('mongoose')

var universitySchema = new mongoose.Schema({
    name: String,
    address: String,
    WebSite:String
  });


const University = mongoose.model("Hotels", universitySchema);

module.exports = University;