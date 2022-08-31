const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    surname: {
        type: Schema.Types.String,
        required: true,
    },
    full_name: {
        type: Schema.Types.String
    },
    user_name:{
      type:Schema.Types.String,
      unique:true,
      required: true,
    },
    city:{
        type:Schema.Types.String,
        required:true
    },
    age: {
        type: Schema.Types.Number,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    birth_date:{
      required:true,
      type:Schema.Types.Date
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    gender: {
        type: Schema.Types.String,
        required: true,
    },

}, { timestamps: true, versionKey: false })

const User = mongoose.model("User", userSchema, "user")
module.exports = User
