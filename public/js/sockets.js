const socket = io()

const saveProduct = (name, price, thumbnail) =>{

    socket.emit('client:saveProduct', {

        name, price, thumbnail

    })

}

const saveMessage = (email, datetime, message) =>{

    socket.emit('client:saveMessage', {

        email, datetime, message

    })

}

socket.on('server:newProduct', appendProduct)

socket.on('server:newMessage', appendMessage)

socket.on('server:inputError', error=>{
    inputError(error.error)
})

socket.on('server:inputMessageError', error=>{
    inputMessageError(error.error)
})



