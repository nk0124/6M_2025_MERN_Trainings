

const mongoose=require("mongoose")
let BrandSchema=mongoose.Schema({
    autoId:{type:Number, default:1},
    brandName:{type:String, default:""},
    logo:{type:String, default:""},

    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()}
})

module.exports=mongoose.model("BrandModel", BrandSchema)