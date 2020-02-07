const {} = require('../models')
const axios = require('axios')
let country = {}
let league = {}

class Controller{
    static football(req, res, next){
        country = req.body.country
        league = req.body.league
        res.status(200).json({
            data : ''
        })
    }
    static footballByCountry(req, res, next){
        console.log(req.body)
        console.log(country)
        axios({
            url : `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=${country}`,
            method : 'get',
            responseType : 'json'
        })
        .then(response => {
            if(league){
                const team = response.data.teams.filter(data => {
                    if(data.strLeague === league) return data
                })
                console.log(team)
                res.status(200).json(team)
            }
            else{
                res.status(200).json(response.data.teams)
            }
        })
        .catch(err => {
            res.status(404).json(err)
        })
    }
    static basketball(req, res, next){
        country = req.body.country
        league = req.body.league
        res.status(200).json({
            data : ''
        })
    }
    static basketballByCountry(req, res, next){
        axios({
            url : `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Basketball&c=${country}`,
            method : 'get',
            responseType : 'json'
        })
        .then(response => {
            if(league){
                const team = response.data.teams.filter(data => {
                    if(data.strLeague === league) return data
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
    static americanFootball(req, res, next){
        country = req.body.country
        league = req.body.league
        res.status(200).json({
            data : ''
        })
    }
    static americanFootballByCountry(req, res, next){
        axios({
            url : `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=American%20Football&c=${country}`,
            method : 'get',
            responseType : 'json'
        })
        .then(response => {
            if(league){
                const team = response.data.teams.filter(data => {
                    if(data.strLeague === league) return data
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
