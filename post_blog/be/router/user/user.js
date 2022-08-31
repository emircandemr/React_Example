const express = require("express")
const router = express.Router()
const userController=require('../../controllers/user/userController')
router.post("/signup", userController.signUp)
router.post("/isExistUserName", userController.isExistUserName)
router.post('/isExistUserMail',userController.isExistUserMail)
router.post('/signIn',userController.signIn)



module.exports = {
    users: router
}