const express = require('express')
const router = express.Router()
const nutritionix = require('./nutritionix')

router.use('/nutritionix', nutritionix)

module.exports = router