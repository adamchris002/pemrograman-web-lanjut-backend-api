const userRoute = require('express').Router()
//memanggil controller
const {UserController} = require('../Controllers');

//membuat enpoint agar dapat menjalankan fungsi yang ada di controller
userRoute.get('/', UserController.getAll)
userRoute.post('/create', UserController.createUser)
// :id digunakan untuk mendapatkan value id
userRoute.put('/update/:id', UserController.updateUser)
userRoute.delete('/delete/:id', UserController.deleteUser)

module.exports = userRoute