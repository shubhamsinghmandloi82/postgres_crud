const express = require('express')
const router = express.Router();

const controller = require('../controller/superAdmin')

router.post('/login', controller.createSuperAdmin)

module.exports = router