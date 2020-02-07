const axios = require('axios')

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
}

module.exports = WgerController