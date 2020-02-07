const router = require('express').Router()
const WgerControlller = require('../controllers/wgerController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')


router.get('/ingredients', WgerControlller.getIngredients)
router.use(authentication)
router.get('/meal-list', WgerControlller.getMealFromUser)

router.post('/ingredients', WgerControlller.inputIngredients)
router.put('/ingredients/:id', authorization, WgerControlller.updateIngredient)
router.delete('/ingredients/:id', authorization, WgerControlller.deleteIngredients)

module.exports = router