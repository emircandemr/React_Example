const usersRouter=require("./user/user").users
const postsRouter=require("./post/post").posts


module.exports={
    user:usersRouter,
    post:postsRouter
}
