const express = require('express')
const router = express.Router()
const nutritionix = require('./nutritionix')
const UserRoutes = require('./user')
const sportsDb = require('./sportsDbRoute')

router.use('/users', UserRoutes)
router.use('/sportsDb', sportsDb)
router.use('/nutritionix', nutritionix)

module.exports = router
