const fs = require('fs')

class Contenedor{

    constructor(file){

        this.file = file
        this.fileReadeable = JSON.parse(fs.readFileSync(this.file,'utf8'))
    }

    async save(obj){

        obj._id =  this.fileReadeable.products.length + 1

        this.fileReadeable.products.push(obj)

        await fs.promises.writeFile(this.file, JSON.stringify(this.fileReadeable), err =>{
            if(err){
                console.log(err)
            }
        })

        return obj
    
    }

    async saveMessage(msg){

        msg._id =  this.fileReadeable.messages.length + 1

        this.fileReadeable.messages.push(msg)

        await fs.promises.writeFile(this.file, JSON.stringify(this.fileReadeable), err =>{
            if(err){
                console.log(err)
            }
        })

        return msg
    }

    getAllMessages(){
        return this.fileReadeable.messages
    }

    getById(_id){

        let obj=this.fileReadeable.products.find(x => {return x._id == parseInt(_id)})

        return obj

    }

    getAll(){
        return this.fileReadeable.products
    }

    async updateById(_id, obj){

        let objIndex = this.fileReadeable.products.findIndex(x => {return x._id == parseInt(_id)})

        if (objIndex == -1){
            return undefined
        }

        obj._id = _id

        this.fileReadeable.products[objIndex] = obj

        await fs.promises.writeFile(this.file, JSON.stringify(this.fileReadeable), err =>{
            if(err){
                console.log(err)
            }})

        
        return obj
        

    }


    async deleteById(_id){

        let index=this.fileReadeable.products.findIndex(x => {return x._id == parseInt(_id)})
        
        if(index==-1){
            return undefined
        }

        let product = this.fileReadeable.products[index]

        this.fileReadeable.products.splice(index,1)
        
        await fs.promises.writeFile(this.file, JSON.stringify(this.fileReadeable), err =>{
            if(err){
                console.log(err)
            }})

        return product
        
    }

    async deleteAll(){

        await fs.promises.writeFile(this.file, JSON.stringify([]), err =>{
            if(err){
                console.log(err)
            }else{
                console.log("Object has been added!")
            }})
    }

}

const Cdor = new Contenedor('database/MyFile.json')

module.exports = Cdor