
const multer=require("multer")
const CategoryController=require("../apis/category/CategoryController")
const BrandController=require("../apis/brands/BrandController")
const ProductController=require("../apis/product/ProductController")


const router=require("express").Router()

//category routes
router.post("/category/add", CategoryController.add)
router.post("/category/all" ,CategoryController.all)
router.post("/category/single" ,CategoryController.single )
router.post("/category/update" , CategoryController.update)
router.post("/category/changeStatus" , CategoryController.changeStatus)


//brands routes
const brandStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './server/public/brand_images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname)
    }
   
  })
  
const brandUpload = multer({ storage: brandStorage })
router.post("/brand/add", brandUpload.single("image"), BrandController.add)
router.post("/brand/all", BrandController.all)
router.post("/brand/single", BrandController.single)
router.post("/brand/delete", BrandController.deleteBrand)
router.delete("/brand/deleteByParams/:_id", BrandController.deleteBrandByParams)
router.post("/brand/update", BrandController.update)
router.post("/brand/changeStatus", BrandController.changeStatus)

// router.get("/brand/deleteByParams/:id", BrandController.deleteBrand)


// product 
const productStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './server/public/product_images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + "-" + file.originalname)
    }
   
  })
  const productUpload = multer({ storage: productStorage })
router.post("/product/add" ,productUpload.single("image") ,ProductController.add)
router.post("/product/all" , ProductController.all)
router.post("/product/single" ,ProductController.single )
router.post("/product/update" , ProductController.update)
router.post("/product/changeStatus" , ProductController.changeStatus)



module.exports=router