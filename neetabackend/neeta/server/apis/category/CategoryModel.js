
// category schema 
const mongoose=require('mongoose')
let CategorySchema=mongoose.Schema({
    id:{type:Number , default:""},
    categoryName:{type:String , default:""},
    description:{type:String , default:""},
    createAt:{type:Date , default:Date.now},
    updateAt:{type:Date , default:Date.now},

})


module.exports=mongoose.model("CategoryModel" , CategorySchema)