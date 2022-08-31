const postService = require('../../services/post/postService')
const {StatusCodes}=require('http-status-codes')

exports.createPost = async (req, res) => {
    try {
        const result = await postService.createPost(req)
        res.json(result).status(StatusCodes.CREATED)
    } catch (error) {
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

exports.getAllPosts = async (req, res) => {
    try {
        const result = await postService.getAllPost(req)
        res.json(result).status(StatusCodes.OK)
    } catch (error) {
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
exports.deletePost = async (req, res) => {
    try {
        const result = await postService.deletePost(req)
        res.json(result).status(StatusCodes.OK)
    } catch (error) {
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

