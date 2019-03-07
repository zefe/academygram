
const express = require("express")
const apiRouter = express.Router()
const viewsRouter = require('./views')

apiRouter.all('/', function(req, res) {
    res.json({ name: 'app-api', version: 1.0 })
})

apiRouter.use('/views', viewsRouter)
module.exports = apiRouter;