const mongoose = require('mongoose')
exports.connectMongoose = async () => {

    try {
        await mongoose.connect(`mongodb+srv://yasindlklc:4d32adf5B*@cluster0.wknqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            autoIndex: true,
            compressors: "zlib",
            minPoolSize: 10,
            maxPoolSize: 100
        })
        console.log("Connected to MongoDB :)")
    } catch (error) {
        throw new Error("Cannot Connect to MongoDB!")
    }
}