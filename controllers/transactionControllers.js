const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');
const Transaction = require('../models/transactionModel');
const Customer = require('../models/customerModel');

// Create a new transaction
const newTransaction = async (req, res) => {
  try {
    const { type, amount, category, customer } = req.body;
    const transaction = new Transaction({
      type,
      amount,
      category,
      customer,
    });
    await transaction.save();

    // Find the customer
    const foundCustomer = await Customer.findById(customer);
    if (!foundCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    // Update the customer's outstanding balance
    if (type === 'expense') {
      foundCustomer.outstandingBalance += amount;
    } else {
      foundCustomer.outstandingBalance -= amount;
    }
    foundCustomer.transactionHistory.push(transaction);
    await foundCustomer.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const getAllTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate('category')
      .populate(
        'customer',
        'name contactDetails transactionHistory outstandingBalance'
      );
    res.status(201).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, amount, category } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(
      id,
      { type, amount, category },
      { new: true }
    );
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByIdAndDelete(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(204).json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const newCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  newTransaction,
  getAllTransaction,
  updateTransaction,
  deleteTransaction,
  newCategory,
  getAllCategories,
};
