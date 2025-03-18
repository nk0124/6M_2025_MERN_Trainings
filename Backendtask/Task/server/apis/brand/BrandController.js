


const BrandModel=require("./BrandModel")


add=(req,res)=>{
       let brandObj= new BrandModel()
        brandObj.brandName=req.query.brandName
        brandObj.logo=req.query.logo
        brandObj.save()
        .then((brandData)=>{
            res.json({
                status:200,
                success:true,
                message:"brand Added!!",
                data:brandData
            })
        })
}



const get= async (req,res)=>{
    try{
      const result=await BrandModel.find()
      res.json({
        status:200,
        success:true,
        message:"Data fetched successfully!!",
        data:result,
      })
    }

    catch{
       res.json({
          status:500,
          success:false,
          message:"Internal Server error"
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