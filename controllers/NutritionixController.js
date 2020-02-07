const axios = require('axios')

class NutritionixController {
    static excercise(req, res, next) {
        const { query, gender, weight_kg, height_cm, age } = req.body
        axios({
            method: 'post',
            url: 'https://trackapi.nutritionix.com/v2/natural/exercise',
            headers: {
                "Content-Type": 'application/json',
                "x-app-id": process.env.NUTRITIONIX_ID,
                "x-app-key": process.env.NUTRITIONIX_KEY
            },
            data: { query, gender, weight_kg, height_cm, age }
          })
          .then(({ data }) => {
              console.log(data)
              res.status(200).json(data.exercises)
          })
          .catch(err => {
              next({
                  name: 'NutritionixError',
                  status: 400,
                  message: 'Bad Request'
              })
          })
    } 
}

module.exports = NutritionixController