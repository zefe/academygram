const express = require("express")
const viewsRouter = express.Router()

const getSignup = require('./signup')
const getProfile = require('./profile')

viewsRouter.get('/signup', getSignup)
viewsRouter.get('/profile', getProfile)


module.exports = viewsRouter;