const userDal = require('../../dal/User/userDal')
const User = require('../../models/user/user')
const moment = require('moment')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const userService = {
    async isExistUserMail(request){
        const {email}=request.body
        const isExist=await userDal.isExistUserMail(email)
        return {isExist:isExist?._id?true:false}
    },
    async isExistUserName(request) {
        const {userName}=request.body
        const isExist=await userDal.isExistUserName(userName)
        return {isExist:isExist?._id?true:false}
    },
    async signIn(request){
        const { user_name, password } = request.body
        const user = await userDal.findByQuery({ user_name, password: md5(password) }, "user_name email full_name")
        if(user){
            const token = jwt.sign({
                userId: user._id,
                fullName: user.full_name,
                email: user.email,
                user_name:user_name
            }, process.env.SECRET, {
                issuer: "localhost",
                expiresIn: process.env.EXPIRESIN
            })
            return {user,token}
        }
        return  null
    },
    async signUp(request) {
        const {name, surname, user_name, email, gender, password, city, birth_date} = request.body

        const newUser = new User({
            name,
            surname,
            full_name: `${name} ${surname}`,
            age: moment(new Date()).diff(moment(birth_date), 'years'),
            email,
            password: md5(password),
            gender,
            city,
            user_name,
            birth_date

        })

        const user = await userDal.create(newUser)
        return user


    },

}
module.exports = userService
