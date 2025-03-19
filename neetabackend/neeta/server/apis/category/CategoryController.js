

const CategoryModel=require("./CategoryModel")



add=(req,res)=>{
    const categoryObj= new CategoryModel()
    categoryObj.id=req.query.id
    categoryObj.categoryName=req.query.categoryName
    categoryObj.description=req.query.description
    categoryObj.save()

    .then((result)=>{
        res.json({
           status:200,
           sucess:true,
           message:"Category Added!!",
           data:result,
        })
    })
    

    .catch((err)=>{
        res.json({
          status:500,
          success:false,
          message:"Internal server error ",
          error:err,
        })
    })
}


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

module.exports={add,get}


