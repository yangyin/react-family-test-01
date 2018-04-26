const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')

const model = require('./models')
const Chat = model.getModel('chat')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/user',userRouter)

// Chat.remove({},(e,d) =>{})

io.on('connection',(socket) => {
    socket.on('sendMsg',(data) => {
        // console.log(data)
        const { from,to,content } = data
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content} , (e,d) => {
            // console.log(d)
            io.emit('recvmsg',Object.assign({},d._doc))
        })
    })
})

server.listen(9093,() => {
    console.log('node port::: 9093')
})