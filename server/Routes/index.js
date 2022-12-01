const routes = require('express').Router()

const userRoute = require('./users')

routes.use('/users', userRoute)

module.exports = routes