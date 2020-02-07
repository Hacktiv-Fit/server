const axios = require('axios')
const {User, IngredientItem} = require('../models')
const {verifyToken} = require('../helpers/jwt');

class WgerController {
    static getIngredients(req, res, next) {
        axios({
            method: 'GET',
            url: "http://wger.de/api/v2/ingredient/",
            responseType: 'json',
            headers: {
                Authorization: process.env.WGER_APIKEY,
                Accept: process.env.WGER_ACCEPTHEAD
            }
        })
            .then(({data}) => {
                res.status(200).json(data.results)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static getMealFromUser(req, res, next) {
        let userData = verifyToken(req.headers.token)
        IngredientItem.findAll({
            where: {
                UserId: userData.id
            },
            order: [["id", "ASC"]]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static inputIngredients(req, res, next) {
        let userData = verifyToken(req.headers.token)
        axios({
            method: 'GET',
            url: "http://wger.de/api/v2/ingredient/",
            responseType: 'json',
            headers: {
                Authorization: process.env.WGER_APIKEY,
                Accept: process.env.WGER_ACCEPTHEAD
            }
        })
            .then(({data}) => {
                let findReq = data.results.filter(ing => ing.name == req.body.ingredient_name)[0]
                let input = {
                        name: findReq.name,
                        energy: Math.round(((findReq.energy / 100) * req.body.amount)),
                        carbohydrates: (+findReq.carbohydrates).toString(),
                        protein: (+findReq.protein).toString(),
                        fat: (+findReq.fat).toString(),
                        UserId: userData.id
                    }
                return IngredientItem.create(input)
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    }

    static updateIngredient(req, res, next) {
        let userData = verifyToken(req.headers.token)
        let ingId = req.params.id
        axios({
            method: 'GET',
            url: `http://wger.de/api/v2/ingredient/`,
            responseType: 'json',
            headers: {
                Authorization: process.env.WGER_APIKEY,
                Accept: process.env.WGER_ACCEPTHEAD
            }
        })
            .then(({data}) => {
                let findReq = data.results.filter(ing => ing.name == req.body.ingredient_name)[0]
                let input = {
                        name: findReq.name,
                        energy: Math.round(((findReq.energy / 100) * req.body.amount)),
                        carbohydrates: (+findReq.carbohydrates).toString(),
                        protein: (+findReq.protein).toString(),
                        fat: (+findReq.fat).toString(),
                        UserId: userData.id
                    }
                return IngredientItem.update(input, {
                    where: {
                        id: ingId,
                        UserId: userData.id
                    }
                })
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static deleteIngredients(req, res, next) {
        let userData = verifyToken(req.headers.token)
        IngredientItem.destroy({
            where: {
                id: req.params.id,
                UserId: userData.id
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}

module.exports = WgerController