const express = require('express');

const {
  newInvoice,
  getAllInvoices,
} = require('../controllers/invoiceControllers');

const isLoggedIn = require('../middlewares/isLoggedIn');

const router = express.Router();

router.post('/invoices', isLoggedIn, newInvoice);
router.get('/invoices', isLoggedIn, getAllInvoices);

module.exports = router;
