const CategoryModel=require("./CategoryModel")

// post or add the category
add= (req,res)=>{
    let validation=""
    if(!req.body.categoryName){
        validation+="Category Name is required, "
    }
    if(!req.body.description){
        validation+="Description is required, "
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false, 
            message:validation
        })
    }else{
        // duplicacy 
        CategoryModel.findOne({categoryName:req.body.categoryName})
        .then(async (categoryData)=>{
        if(!categoryData){
                let categoryObj= new CategoryModel()
                // console.log(categoryObj)
                let total=await CategoryModel.countDocuments().exec()
                categoryObj.autoId=total+1
                categoryObj.categoryName=req.body.categoryName
                categoryObj.description=req.body.description
                categoryObj.save()
                .then((categoryData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Category Added!!",
                        data:categoryData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error!",
                        error:err
                    })
                })
            
        }else{
            res.json({
                status:200,
                success:true,
                message:"Category already exist with same name",
                data:categoryData
            })
        }
            
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error!",
                error:err
            })
        })
    }
    
    
}


// get the category
all=(req,res)=>{
    let formData=req.body
    let limit=formData.limit  
    let currentPage=formData.currentPage 
    delete formData.limit 
    delete formData.currentPage
    //skip, sort, limit
    CategoryModel.find(formData)
   .limit(limit)
    .skip((currentPage-1)*limit)
    // .sort({createdAt:-1})
    .then(async (categoryData)=>{
        if(categoryData.length>0){
            let total=await BrandModel.countDocuments().exec()
            res.json({
                status:200,
                success:true,
                message:"Brand loaded",
                total:total,
                data:categoryData
            })
        }else{
            res.json({
                status:404,
                success:false,
                message:"No brand Found!!",
                data:categoryData
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
   let formData=req.boby
   if(!formData._id){
      validation+="_id id required"
   }
   if(!!validation.trim()){
      res.json({
          status:422,
          success:false,
          message:validation
      })
   } else{
      CategoryModel.findOne({_id:formData._id})
      .then((categoryData)=>{
          if(!categoryData){
             res.json({
                status:404,
                success:false,
                message:"No Category Found"
             })
          } else{
              res.json({
                 status:200,
                 success:true,
                 message:"Category exits",
                 data:categoryData
              })
          }
      })

      .catch(()=>{
          res.json({
             status:200,
             success:true,
             message:"Category exits ",
             data:categoryData
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
        CategoryModel.findOne({_id:formData._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"No Category found!!"
                })
            }else{
                if(!!formData.categoryName){
                    categoryData.categoryName=formData.categoryName 
                }
                if(!!formData.description){
                    categoryData.description=formData.description
                }
               categoryData.save()
               .then((categoryData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Category updated successfully!!",
                        data:categoryData
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
        CategoryModel.findOne({_id:formData._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"No Category found!!"
                })
            }else{
            // brandData.status=!brandData.status 
               categoryData.status=formData.status 
               categoryData.save()
               .then((brandData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Status updated successfully",
                        data:brandData
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

module.exports={add , all ,single , update, changeStatus}