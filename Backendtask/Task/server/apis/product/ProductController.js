
const ProductModel=require('./ProductModel')


add=(req,res)=>{
       let productObj= new ProductModel()
        productObj.categoryName=req.query.categoryName
        productObj.brandName=req.query.brandName
        productObj.name=req.query.name
        productObj.price=req.query.price
        productObj.quantity=req.query.quantity
        productObj.description=req.query.description
        productObj.image=req.query.image
        productObj.stock=req.query.stock


        productObj.save()
        .then((productData)=>{
            res.json({
                status:200,
                success:true,
                message:"product Added!!",
                data:productData
            })
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server error",
                error:err,
            })
        })
}


const get= async (req,res)=>{
    try{
       const result = await ProductModel.find()
       res.json({
         status:200,
         success:true,
         message:"Data fetched successfully!",
         data:result,
       })
    }

    catch{
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error",
        })
    }
}

// all=(req,res)=>{
//     res.json({
//         status:200,
//         success:true,
//         message:"data  api is working!!"
//     })
// }


module.exports={add , get}