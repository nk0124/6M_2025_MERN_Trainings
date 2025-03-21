const CategoryModel=require("./CategoryModel")


add= (req,res)=>{
    // console.log("hello world!")
      CategoryModel.findOne({categoryName:req.body.categoryName})
    .then(async (categoryData)=>{
       if(!categoryData){
         let categoryObj= new CategoryModel()
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

// add=(req,res)=>{
//        let categoryObj= new CategoryModel()
//         categoryObj.categoryName=req.query.categoryName
//         categoryObj.description=req.query.description
//         categoryObj.save()
//         .then((categoryData)=>{
//             res.json({
//                 status:200,
//                 success:true,
//                 message:"Category Added!!",
//                 data:categoryData
//             })
//         })
//         .catch((err) => {
//             res.json({
//                 status: 500,
//                 success: false,
//                 message: "Internal server error!",
//                 error: err
//             })
//         })

// }

// const get=(req,res)=>{
//     CategoryModel.find()
//     .then((result)=>{
//         res.json({
//             status:200,
//             success:true,
//             message:"Data fetched successfully!",
//             data:result,
//         })
//     })
//     .catch((err)=>{
//         res.status(500).json({
//             status:500,
//             success:false,
//             message:"Internal server error",
//             error:err,
//         })
//     })
// }

const get = async (req, res) => {
    try {
        const result = await CategoryModel.find()
        res.json({
            status: 200,
            success: true,
            message: "Data Fetched!",
            data : result
        })
    }
    catch {
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error",
        })
    }
}






module.exports={add , get}