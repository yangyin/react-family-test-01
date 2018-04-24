const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/user',userRouter)


io.on('connection',(socket) => {
    console.log('user login')
    socket.on('sendMsg',(data) => {
        console.log(data)
        io.emit('recvmsg',data)
    })
})

server.listen(9093,() => {
    console.log('node port::: 9093')
})