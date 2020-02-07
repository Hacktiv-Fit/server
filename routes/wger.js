const router = require('express').Router()
const WgerControlller = require('../controllers/wgerController')

router.get('/ingredients', WgerControlller.getIngredients)
router.post('/ingredients', WgerControlller.inputIngredients)
router.get('/meal-list', WgerControlller.getMealFromUser)
router.put('/ingredients/:id', WgerControlller.updateIngredient)
router.delete('/ingredients/:id', WgerControlller.deleteIngredients)

module.exports = router