const productList = document.getElementsByClassName('product-list')[0]
const messageList = document.getElementsByClassName('chat-log')[0]
const error = document.getElementsByClassName('error')[0]
const errorMessage = document.getElementsByClassName('errorMessage')[0]

const appendProduct = (product)=>{
    
    productList.innerHTML+=`
    
    <div class="product-container">
        <div class="name c"><h3>${product.name}</h3></div>
        <div class="price c"><h3>${product.price}</h3></div>
        <div class="image c"><img src="${product.thumbnail}" onerror="this.onerror=null;this.src='https://icon-library.com/images/icon-picture/icon-picture-5.jpg';" alt=""></div>
    </div>
    
    `

    error.innerHTML = ''

}

const appendMessage = (message)=>{

    messageList.innerHTML+=`
    
    <div class="message-container">

        <h4 class="email inp">${message.email}</h4>
        <h4 class="datetime inp">[${message.datetime}]:</h4>
        <h4 class="message inp">${message.message}</h4>

    </div>
    
    `

    errorMessage.innerHTML = ''

}

const inputError = (err)=>{
    error.innerHTML = err
}

const inputMessageError = (err)=>{
    errorMessage.innerHTML = err
}