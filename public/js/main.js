const btnSendProduct = document.getElementsByClassName("btn-send")[0]
const btnSendMessage = document.getElementsByClassName('send-message-button')[0]

const name = document.getElementsByClassName('name-input')[0]
const price = document.getElementsByClassName('price-input')[0]
const thumbnail = document.getElementsByClassName('thumbnail-input')[0]

const email = document.getElementsByClassName('email-input')[0]
const message = document.getElementsByClassName('message-input')[0]


btnSendProduct.addEventListener('click', (e)=>{
    
    saveProduct(name.value, price.value, thumbnail.value)
    
})

btnSendMessage.addEventListener('click', (e)=>{

    let datetime = new Date()
    datetime = datetime.getDate() + "/" + datetime.getMonth() + "/" + datetime.getFullYear() + " " + datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()

    saveMessage(email.value, datetime, message.value)
    
})