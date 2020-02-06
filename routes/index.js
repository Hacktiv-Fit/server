const express = require('express')
const router = express.Router()
const nutritionix = require('./nutritionix')
const UserRoutes = require('./user')
const sportsDb = require('./sportsDbRoute')
const wgerRoutes = require('./wger')

router.use('/users', UserRoutes)
router.use('/sportsDb', sportsDb)
router.use('/nutritionix', nutritionix)
router.use('/wger', wgerRoutes)

module.exports = router
