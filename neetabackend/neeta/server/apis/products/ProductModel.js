


// products schema 
const mongoose=require('mongoose')
let ProductsSchema=mongoose.Schema({
    id:{type:Number , default:""},
    categoryName:{type:String , default:""},
    price:{type:String, default:""},
    quantity:{type:String , default:""},
    brandName:{type:String , default:""},
    name:{type:String, default:""},
    description:{type:String , default:""},
    createAt:{type:Date , default:Date.now},
    updateAt:{type:Date , default:Date.now},

})


module.exports=mongoose.model("ProductModel" , ProductsSchema)