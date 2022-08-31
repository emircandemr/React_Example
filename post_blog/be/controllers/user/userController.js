const userService = require('../../services/user/userService')
const {StatusCodes}=require('http-status-codes')
exports.signIn=async (req,res)=>{
    try {
        const result = await userService.signIn(req)
        if(result){
            res.json(result).status(StatusCodes.CREATED)
            return
        }
        res.status(StatusCodes.UNAUTHORIZED).json({message:'Incorrect Info'})


    } catch (error) {
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
exports.signUp = async (req, res) => {
    try {
        const result = await userService.signUp(req)
        res.json(result).status(StatusCodes.CREATED)
    } catch (error) {
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}
exports.isExistUserName = async (req, res) => {
    try {
        const result = await userService.isExistUserName(req)
        res.json(result).status(StatusCodes.OK)
    } catch (error) {
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}
exports.isExistUserMail = async (req, res) => {
    try {
        const result = await userService.isExistUserMail(req)
        res.json(result).status(StatusCodes.OK)
    } catch (error) {
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}
