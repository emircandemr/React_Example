const Post=require('../../models/posts/post')
const postDataAccess = {
    async create(postModel) {
        return await postModel.save()
    },
    async findById(postId){
        return Post.findById(postId).populate({
            path:'userId',
            select:"full_name gender birth_date city"
        })
    },
    async getAll(){
        return Post.find().populate({
            path:'userId',
            select:"full_name gender birth_date city"
        }).sort('-createdAt')
    }

}

module.exports = postDataAccess
