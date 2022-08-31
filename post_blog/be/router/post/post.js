const express = require("express")
const router = express.Router()
const postController=require('../../controllers/post/postController')
router.post("/create", postController.createPost)
router.get("/list", postController.getAllPosts)

module.exports = {
    posts: router
}
