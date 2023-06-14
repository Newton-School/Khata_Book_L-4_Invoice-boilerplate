const mongoose = require('mongoose');
const Category = require('../models/categoryModel');

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  //Adding for Customer Schema
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
