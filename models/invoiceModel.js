const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  items: [
    {
      description: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  dueDate: {
    type: Date,
    required: true,
  },
  paymentTerms: {
    type: String,
    required: true,
  },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
