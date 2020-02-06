const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = process.env.CLIENT_ID
const SECRET_PASSWORD = process.env.SECRET_PASSWORD
const client = new OAuth2Client(CLIENT_ID)

class UserController {
  static signUp (req, res, next) {
    let data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    User
      .create(data)
      .then(user => {
        let data = {}
        data.id = user.id
        data.name = user.name
        data.email = user.email
        res.status(200).json({
          data,
          msg: 'User Register Success'
        })
      })
      .catch(next)
  }

  static signIn (req, res, next) {
    const { email, password } = req.body
    User
      .findOne({
        where: {
          email: email
        }
      })
      .then(user => {
        if(user){
          const isValid = comparePassword(password, user.password)
          if(isValid){
            let payload = {
              id: user.id,
              email: user.email,
              name: user.name
            }
            const token = generateToken(payload)
            res.status(200).json({
              token,
              name: payload.name
            })
          } else {
            next({
              name: 'Login Error',
              status: 400,
              msg: 'Wrong Email/Password !'
            })  
          }
        } else {
          next({
            name: 'Login Error',
            status: 400,
            msg: 'Wrong Email/Password !'
          })
        }
      })
      .catch(next)
  }

  static gSignIn (req, res, next) {
    let data = ''
    const idToken = req.headers.token
    client
      .verifyIdToken({
        idToken,
        audience: CLIENT_ID
      })
      .then( ({ payload }) => {
        data = payload
        return User
          .findOne({
            where: {
              email: data.email
            }
          })
      })
      .then( user => {
        if(user){
          return user
        } else {
          return User
            .create({
              name: data.name,
              email: data.email,
              password: SECRET_PASSWORD
            })
        }
      })
      .then( user => {
        let payload = {
          id: user.id,
          email: user.email,
          name: user.name
        }
        const token = generateToken(payload)
        res.status(200).json({
          name: payload.name,
          token
        })
      })
      .catch(next)
  }
}

module.exports = UserController