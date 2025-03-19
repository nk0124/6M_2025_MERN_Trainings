
const CategoryController=require('../apis/category/CategoryController')
const ProductController=require("../apis/products/ProductController")



//express provides routing feature
const router=require("express").Router()




router.get("/category/add", CategoryController.add)
router.get('/product/add'  , ProductController.add)


router.get("/category/view", CategoryController.get)
router.get("/product/view" , ProductController.get)

module.exports=router