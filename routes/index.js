const express = require('express')
const router = express.Router()
const nutritionix = require('./nutritionix')
const UserRoutes = require('./user')

router.use('/users', UserRoutes)
router.use('/nutritionix', nutritionix)

module.exports = router
