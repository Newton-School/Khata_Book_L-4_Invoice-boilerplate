const express = require('express');

const {
  newCustomer,
  getAllCustomers,
} = require('../controllers/customerControllers');

const isLoggedIn = require('../middlewares/isLoggedIn');
const { get } = require('../src/app');

const router = express.Router();

router.post('/customers', isLoggedIn, newCustomer);
router.get('/customers', isLoggedIn, getAllCustomers);

module.exports = router;
