const mongoose = require('mongoose');

// customer: This field references the Customer model using the ObjectId type. It establishes a relationship between the Invoice and Customer models, where each invoice is associated with a specific customer. It is a required field.
// items: This field represents an array of objects, where each object represents an item included in the invoice. Each item object contains the following properties:
// description: A string describing the item. It is a required field.
// quantity: The number of units or quantity of the item. It is a required field.
// price: The price of the item. It is a required field.
// dueDate: This field represents the due date of the invoice. It is of type Date and is a required field.
// paymentTerms: This field represents the payment terms or conditions associated with the invoice. It is of type String and is a required field.
const invoiceSchema = new mongoose.Schema({
  //Write a invoice schema here
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
