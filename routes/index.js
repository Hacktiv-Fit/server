const router = require('express').Router()
const sportsDb = require('./sportsDbRoute')

router.use('/sportsDb', sportsDb)

module.exports = router