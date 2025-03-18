
const mongoose=require('mongoose')

let ProductSchema=mongoose.Schema({
    categoryName:{type:String ,default:""},
    brandName:{type:String ,default:""} ,
    name:{type:String , default:""},
    price:{type:String , default:""},
    quantity:{type:String , default:""},
    description:{type:String , default:""} ,
    image:{type:String , default:""} ,
    stock:{type:String , default:""},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()}

})

module.exports=mongoose.model("ProductModel", ProductSchema)