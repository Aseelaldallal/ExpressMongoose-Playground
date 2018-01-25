const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const childrenSchema = require('./children');

const parentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name for the parent']
  },
  description: String,
  strictnessLevel: Number,
  children: [ChildrenSchema],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
});

module.exports = new mongoose.model('parent', ParentSchema);
