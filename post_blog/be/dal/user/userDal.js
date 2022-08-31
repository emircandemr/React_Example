const User=require('../../models/user/user')
const userDataAccess = {
    async create(userModel) {
        return await userModel.save()
    },
    async isExistUserMail(email){
        return await User.exists({email:email})
    },
    async isExistUserName(userName) {
        return await User.exists({user_name:userName})
    },
    async findByQuery(where, fields) {
        return await User.findOne(where).select(fields)
    },
}

module.exports = userDataAccess