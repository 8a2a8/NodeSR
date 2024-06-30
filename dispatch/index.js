const express = require('express');
const versionRoutes = require('./version');
const authenticationRoutes = require('./authentication');

const router = express.Router();

router.use(versionRoutes);

router.use(authenticationRoutes);

module.exports = router;
