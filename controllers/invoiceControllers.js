const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoiceModel');
const Customer = require('../models/customerModel');

const newInvoice = async (req, res) => {
  try {
    //Write a code here
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const getAllInvoices = async (req, res) => {
  try {
    //Write a code here
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  newInvoice,
  getAllInvoices,
};
