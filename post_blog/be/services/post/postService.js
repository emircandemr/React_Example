const postDal = require('../../dal/post/postDal')
const Post = require('../../models/posts/post')
const io = require('../../socket/socket')
const postService = {
    async createPost(request) {
        const {text,userId,socketId}=request.body
        const newPost = new Post({
            text,
            userId,
        })
        const new_post=await postDal.create(newPost)
        const post=await  postDal.findById(new_post._id)
        const my_socket = io.getIO().sockets.sockets.get(socketId);
        my_socket.broadcast.emit("new_post", {action: "CREATE", payload: post})
        return post
    },
    async getAllPost() {
        const posts=   await  postDal.getAll()
        return posts
    },
    async deletePost(request){
        const {postId}=request.body
        const isDeleted=await  postDal.deletePost(postId)
        return isDeleted
    }

}
module.exports = postService
