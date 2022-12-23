const  { Router } = require('express')
const database = require('../database/database_handler')

const router = Router()

router.get('/products', (req, res)=>{

    let products = database.getAll()
    let messages = database.getAllMessages()

    res.render('index', {products, messages})
})

// router.post('/products', async (req, res)=>{

//     let product = req.body

//     if(product.name=='' || product.price==''){
//         let products = database.getAll()
//         res.render('newProduct', {products: products, error: "The name and price fields are required"})
//         return
//     }

//     let productSaved= await database.save(product)

//     let products = database.getAll()

//     res.render('newProduct', {products, error:false})
 
// })

module.exports = router