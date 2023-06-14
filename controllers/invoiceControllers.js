const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoiceModel');
const Customer = require('../models/customerModel');

const newInvoice = async (req, res) => {
  try {
    const { customer, items, dueDate, paymentTerms } = req.body;

    // Find the customer
    const foundCustomer = await Customer.findById(customer);
    if (!foundCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    // Create the invoice
    const invoice = new Invoice({
      customer,
      items,
      dueDate,
      paymentTerms,
    });
    await invoice.save();

    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate('customer');
    res.status(201).json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  newInvoice,
  getAllInvoices,
};
