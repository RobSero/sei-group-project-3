const mongoose = require('mongoose')
// const userSchema = require('./user') //* not in use yet
// const groupPostSchema = 0



const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  // posts: [ groupPostSchema ],
  // followers: [ userSchema ]
}, {
  timestamps: true
})

GroupSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Group', GroupSchema)