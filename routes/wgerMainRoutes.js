const router = require('express').Router()
const wgerRoutes = require('./wger')

router.use('/wger', wgerRoutes)

module.exports = router