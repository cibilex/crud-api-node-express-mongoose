const express = require("express");
const router = express.Router();
const {getAllCategories,addCategory,getCategoryWidthThatId,updateCategoryWithThatId,deleteCategoryWithThatId}=require("../controllers/category")


router.get("/api/categories",getAllCategories)
router.post("/api/categories",addCategory)
router.get("/api/categories/:id",getCategoryWidthThatId)
router.put("/api/categories/:id",updateCategoryWithThatId)
router.delete("/api/categories/:id",deleteCategoryWithThatId)






module.exports=router