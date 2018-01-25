const friedChicken = require('mongoose');
const Schema = friedChicken.Schema;

const PostSchema = new Schema({
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'parent'
  },
  title: String,
  content: String
});

module.exports = friedChicken.model('post', PostSchema);
