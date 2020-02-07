const {} = require('../models')
const axios = require('axios')

class Controller{
    static footballByCountry(req, res, next){
        console.log(req.body)
        console.log(req.body.country)
        axios({
            url : `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=${req.body.country}`,
            method : 'get',
            responseType : 'json'
        })
        .then(response => {
            if(req.body.league){
                const team = response.data.teams.filter(data => {
                    if(data.strLeague === req.body.league) return data
                })
                res.status(200).json(team)
            }
            else{
                res.status(200).json(response.data)
            }
        })
        .catch(err => {
            res.status(404).json(err)
        })
    }
    static basketballByCountry(req, res, next){
        axios({
            url : `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Basketball&c=${req.body.country}`,
            method : 'get',
            responseType : 'json'
        })
        .then(response => {
            if(req.body.league){
                const team = response.data.teams.filter(data => {
                    if(data.strLeague === req.body.league) return data
                })
                res.status(200).json(team)
            }
            else{
                res.status(200).json(response.data)
            }
        })
        .catch(err => {
            res.status(404).json(err)
        })
    }
    static americanFootbalByCountry(req, res, next){
        axios({
            url : `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=American%20Football&c=${req.body.country}`,
            method : 'get',
            responseType : 'json'
        })
        .then(response => {
            if(req.body.league){
                const team = response.data.teams.filter(data => {
                    if(data.strLeague === req.body.league) return data
                })
                res.status(200).json(team)
            }
            else{
                res.status(200).json(response.data)
            }
        })
        .catch(err => {
            res.status(404).json(err)
        })
    }
}

module.exports = Controller
