require('dotenv').config()
const express = require('express')
const app = express()
const PORT = +process.env.PORT
const cors = require('cors')
const wgerMainRoutes = require('./routes/wgerMainRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(wgerMainRoutes)



app.listen(PORT, () => {
    console.log('listen to', PORT)
})