const router = require('express').Router()
const UserRoutes = require('./user')
const sportsDb = require('./sportsDbRoute')

router.use('/users', UserRoutes)
router.use('/sportsDb', sportsDb)

module.exports = router
