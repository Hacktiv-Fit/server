const express = require('express')
const router = express.Router()
const NutritionixController = require('../controllers/NutritionixController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.post('/excercise', NutritionixController.excercise)

module.exports = router