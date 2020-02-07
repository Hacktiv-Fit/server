const router = require('express').Router()
const Controller = require('../controllers/sportsDbController')

router.get('/football', Controller.footballByCountry)
router.post('/football', Controller.football)
router.get('/basketball', Controller.basketballByCountry)
router.post('/basketball', Controller.basketball)
router.get('/americanFootball', Controller.americanFootballByCountry)
router.post('/americanFootball', Controller.americanFootball)

module.exports = router
