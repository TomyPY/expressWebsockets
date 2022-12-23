const express = require('express')
const {Server: WebSocket} = require('socket.io')
const http = require('http')

const baseRoutes = require('./routers/base')
const path = require('path')
const database = require('./database/database_handler')

//CREATING WEBSOCKET SERVER
const app = express()
const httpServer = http.createServer(app)
const io = new WebSocket(httpServer)

//VARIABLES STUFF
app.set('PORT', process.env.PORT || 8080)

//EXPRESS CONFIG
app.use(express.json())
app.use(express.urlencoded({"extended":true}))
app.use(express.static(path.join(__dirname, '/public')))

//ENGINE
app.set('views', './views')
app.set('view engine', 'ejs')

//ROUTES
app.use('/api', baseRoutes)

//WEBSOCKET CONFIG
io.on("connection", (socket)=>{

    socket.on('client:saveProduct', async (product)=>{

    
        if(product.name=='' || product.price=='')
            {
                socket.emit('server:inputError', {error: "The name and price fields are required"})
                return
            }
            
        let productSaved= await database.save(product)
        io.sockets.emit('server:newProduct', productSaved)

    })

    socket.on('client:saveMessage', async (message)=>{

        if(message.email=='' || message.message=='')
            {
                socket.emit('server:inputMessageError', {error: "Message and Email fields are required"})
                return
            }

        let messageSaved = await database.saveMessage(message)
        io.sockets.emit('server:newMessage', messageSaved)

    })

})



//STARTING SERVER
httpServer.listen(app.get('PORT'), (err) => {

    if(err){
        console.log(`Error en el inicio del servidor: ${err}`)
        return
    }

    console.log(`Servidor escuchando el puerto ${app.get('PORT')}`)
     
    })