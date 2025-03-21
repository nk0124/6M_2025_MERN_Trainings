
const CategoryController=require("../apis/category/CategoryController")
const ProductController=require("../apis/product/ProductController")
const BrandController=require("../apis/brand/BrandController")

//express provides routing feature
const router=require("express").Router()

//category routes
// to post / add the product in db
router.post("/category/add", CategoryController.add)
router.post("/product/add" , ProductController.add)
router.post("/brand/add" , BrandController.add)



///router.method("endpoint", method)
// to get the data fetch from db 
router.get("/category/get", CategoryController.get)
router.get("/product/get" , ProductController.get)
router.get("/brand/get" , BrandController.get)


module.exports=router