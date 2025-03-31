

const ProductModel = require("./ProductModel")


add=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData.categoryName){
        validation+="Categoryname is required"
    }
    if(!formData.brandName){
       validation+="Brand name is required"
    }
    if(!formData.name){
        validation+="Product name is required"
    }
    if(!formData.price){
        validation+="Price is required"
    }
    if(!formData.quantity){
        validation+="Quantity is required"
    }
    if(!formData.description){
        validation+="Description is required"
    }
    if(!formData.stock){
        validation+="Stock  is required"
    }
    if(!req.file){
        validation+="Image is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        //duplicacy 
        ProductModel.findOne({name:formData.name})
        .then(async (productData)=>{
            if(!productData){
                let productObj=  new ProductModel()
                // console.log(brandObj)

                let total=await ProductModel.countDocuments().exec()
                productObj.autoId=total+1
                productObj.categoryName=formData.categoryName
                productObj.brandName=formData.brandName
                productObj.price=formData.price
                productObj.name=formData.name
                productObj.quantity=formData.quantity
                productObj.stock=formData.stock
                productObj.image="product_images/"+req.file?.filename
                productObj.save()
                .then((productData)=>{
                    res.json({
                        success:true,
                        status:200,
                        message:"Product added!!",
                        data:productData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error",
                        error:err
                    }) 
                })
            }else{
                res.json({
                    status:200,
                    success:false,
                    message:"Product already exists",
                    data:productData
                })
            }   
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                error:err
            })
        })
    }
}



all=(req,res)=>{
    let formData=req.body
    let limit=formData.limit  
    let currentPage=formData.currentPage 
    delete formData.limit 
    delete formData.currentPage
    //skip, sort, limit
    ProductModel.find(formData)
   .limit(limit)
    .skip((currentPage-1)*limit)
    // .sort({createdAt:-1})
    .then(async (productData)=>{
        if(productData.length>0){
            let total=await ProductModel.countDocuments().exec()
            res.json({
                status:200,
                success:true,
                message:"Product loaded",
                total:total,
                data:productData
            })
        }else{
            res.json({
                status:404,
                success:false,
                message:"No product Found!!",
                data:productData
            })
        }
        
    }) 
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal server error",
            error:err
        })
    })   
}



single=(req,res)=>{
    let validation=""
    let formData=req.body 
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        ProductModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"No Product found!!"
                })
            }else{
                res.json({
                    status:200,
                    success:true,
                    message:"Product exists",
                    data:productData
                })
            }
            
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                error:err
            })
        })
    }
}



update=(req,res)=>{
    let formData=req.body 
    let validation=""
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        ProductModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"No Product found!!"
                })
            }else{
                if(!!formData.categoryName){
                    productData.categoryName=formData.categoryName 
                }
                if(!!formData.brandName){
                    productData.brandName=formData.brandName
                }
                if(!!formData.name){
                    productData.name=formData.name
                }
                if(!!formData.price){
                    productData.price=formData.price
                }
                if(!!formData.quantity){
                    productData.quantity=formData.quantity
                }
                if(!!formData.description){
                    productData.description=formData.description
                }
                if(!!formData.image){
                    productData.image=formData.image
                }
                if(!!formData.stock){
                    productData.stock=formData.stock
                }
               productData.save()
               .then((productData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Brand updated successfully!!",
                        data:productData
                    })
               })
               .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error",
                        error:err
                    })
               }) 
            }
            
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                error:err
            })
        })
    }

    // find given _id 
    //update

}


changeStatus=(req,res)=>{
    let validation=""
    let formData=req.body 
    if(!formData._id){
        validation+="_id is required"
    }
    
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        ProductModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"No Product found!!"
                })
            }else{
            // brandData.status=!brandData.status 
               productData.status=formData.status 
               productData.save()
               .then((productData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Status updated successfully",
                        data:productData
                    })
               })
               .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error",
                        error:err
                    })
            })

            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                error:err
            })
        })
    }
}


module.exports={add , all , single , update , changeStatus} 