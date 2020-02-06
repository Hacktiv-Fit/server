const router = require('express').Router()
const WgerControlller = require('../controllers/wgerController')

router.get('/ingredients', WgerControlller.getIngredients)

module.exports = router