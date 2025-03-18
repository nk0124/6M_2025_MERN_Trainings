const CategoryModel=require("./CategoryModel")


add=(req,res)=>{
       let categoryObj= new CategoryModel()
        categoryObj.categoryName=req.query.categoryName
        categoryObj.description=req.query.description
        categoryObj.save()
        .then((categoryData)=>{
            res.json({
                status:200,
                success:true,
                message:"Category Added!!",
                data:categoryData
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                success: false,
                message: "Internal server error!",
                error: err
            })
        })

}

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


// all=(req,res)=>{
//     res.json({
//         status:200,
//         success:true,
//         message:"data  api is working!!"
//     })
// }



module.exports={add,get}