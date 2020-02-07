const { IngredientItem } = require('../models')
module.exports = (req, res, next) => {
  
  IngredientItem
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(item => {
      if(item) {
        if(item.UserId === req.decoded.id){
          next()
        } else {
          next({
            name: 'Authentication Error',
            msg: "Not Authorized"
          })
        }
      } else {
        next({
          name: 'Authentication Error',
          status: 404,
          msg: 'Item Not Found'
        })
      }
    })
    .catch(next)
}