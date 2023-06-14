const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactDetails: {
    type: String,
    required: true,
  },
  outstandingBalance: {
    type: Number,
    default: 0,
  },
  transactionHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction',
    },
  ],
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
