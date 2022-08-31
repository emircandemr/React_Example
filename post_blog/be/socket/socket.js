let io;
module.exports = {
    init: function (server) {
        io = require('socket.io')(server,{
            cors: {
                origin: "http://localhost:3000",
            }
        })
        return io;
    },
    getIO: function () {
        if (!io) {
            throw new Error("Socket Yok")
        }
        return io;
    }
}
