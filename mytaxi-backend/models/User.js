const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  matricNo: { type: String, required: true, unique: true },
  role: { type: String, enum: ['driver', 'rider'], required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);