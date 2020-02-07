const router = require('express').Router()
const Controller = require('../controllers/sportsDbController')

router.get('/football', Controller.footballByCountry)
router.get('/basketball', Controller.basketballByCountry)
router.get('/americanFootbal', Controller.americanFootbalByCountry)

module.exports = router
