const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChildrenSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  interests: [String],
  allergies: [String]
});

module.exports = ChildrenSchema;
