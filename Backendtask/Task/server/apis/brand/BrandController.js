


const BrandModel = require("./BrandModel")


add=(req,res)=>{
  // console.log("hello world!")
   BrandModel.findOne({brandName:req.body.brandName})
   .then( async (brandData)=>{
      if(!brandData){
        let brandObj=new BrandModel()
        let total=await BrandModel.countDocuments().exec()
        brandObj.autoId=total+1
        brandObj.brandName=req.body.brandName
        brandObj.logo=req.body.logo
        brandObj.save()
        .then((brandData)=>{
          res.json({
             status:200,
             success:true,
             message:"Category Added!!",
             data:brandData
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
          message:"Brand already exist with same name",
          data:brandData,
        })
      }
   })

   .catch((err)=>{
      res.json({
        status:500,
        success:false,
        message:"Internal server error",
        error:err,
      })
   })
}


// add=(req,res)=>{
//        let brandObj= new BrandModel()
//         brandObj.brandName=req.query.brandName
//         brandObj.logo=req.query.logo
//         brandObj.save()
//         .then((brandData)=>{
//             res.json({
//                 status:200,
//                 success:true,
//                 message:"brand Added!!",
//                 data:brandData
//             })
//         })
// }



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



module.exports={add, get}