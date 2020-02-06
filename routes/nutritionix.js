const express = require('express')
const router = express.Router()
const NutritionixController = require('../controllers/NutritionixController')

router.post('/excercise', NutritionixController.excercise)

module.exports = router