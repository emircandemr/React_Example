const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    text: {
        type: Schema.Types.String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true, versionKey: false })

const Post = mongoose.model("Post", postSchema, "post")
module.exports = Post
