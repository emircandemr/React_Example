const express = require('express')
const app = express()
const socket=require('./socket/socket')
const helmet = require("helmet");
const db = require('./db/db')
const cors = require('cors')
const config=require('./configs/config')
const routes=require('./router/router')


app.use(cors())

config.installServerConfigs()


app.use(helmet())
app.use(express.json())
app.use(`${process.env.APP_PREFIX}user`, routes.user)
app.use(`${process.env.APP_PREFIX}post`, routes.post)

db.mongooseConnection.connectMongoose().then(()=>{
    const server=app.listen(process.env.APP_PORT, () => {
        console.log('running 4545')
    });
    let io=socket.init(server)
    io.on('connect',function (socket) {
        console.log("client connect")
    })
    //socket id al bul ve broadcast yap
/*
    io.on('connection',function (socket) {
        console.log("client1 connect")
        socket.on('deneme',function (s) {
            console.log("client2 connect",s)
        })
    })
*/


})
/*io.getIO().on('connection',(socket)=>{
    socket.broadcast.emit("new_post", {action: "CREATE", payload: newPost})
})*/



