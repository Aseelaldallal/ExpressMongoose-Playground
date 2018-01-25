const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'parent'
  },
  title: String,
  content: String
});

module.exports = mongoose.model('post', PostSchema);
