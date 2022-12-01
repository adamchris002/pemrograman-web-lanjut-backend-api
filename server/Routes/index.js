const routes = require('express').Router()

const userRoute = require('./users')

//agar dapat masuk ke dalam userRoute
routes.use('/users', userRoute)

module.exports = routes