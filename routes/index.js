const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/money', require('./transactionRoutes'));
router.use('/handle', require('./customerRoutes'));
router.use('/money', require('./invoiceRoutes'));

module.exports = router;
