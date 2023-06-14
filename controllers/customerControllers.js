const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel');

const newCustomer = async (req, res) => {
  try {
    const { name, contactDetails } = req.body;
    const customer = new Customer({ name, contactDetails });
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  newCustomer,
  getAllCustomers,
};
