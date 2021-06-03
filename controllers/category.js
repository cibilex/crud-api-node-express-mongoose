const categoryModel = require("../models/category.js");
const asyncErrorHandler = require("express-async-handler");
const MyError = require("../helpers/MyError");
module.exports.getAllCategories = asyncErrorHandler(async (req, res, next) => {
  const data = await categoryModel.find({});

  res.status(200).json({
    successs: true,
    count:data.length,
    message: data,
  });
});

module.exports.addCategory = asyncErrorHandler(async (req, res, next) => {
  const category = await categoryModel.create(req.body);
  res.status(200).json({
    success: true,
    message: category,
    code: 200,
  });
});
module.exports.getCategoryWidthThatId = asyncErrorHandler(
  async (req, res, next) => {
    const category = await categoryModel.findById(req.params.id);
    if (!category) throw new MyError("no category with that id", 400);
    res.status(200).json({
      success: true,
      message: category,
    });
  }
);
module.exports.updateCategoryWithThatId = asyncErrorHandler(
  async (req, res, next) => {
    const newCotegory = await categoryModel.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true, runValidators: true, context: "query" }
    );

    if (!newCotegory) throw new MyError("no category with that id", 400);

    res.status(201).json({
      success: true,
      message: "successfully updated the category",
      data: newCotegory,
    });
  }
);
module.exports.deleteCategoryWithThatId = asyncErrorHandler(
  async (req, res, next) => {
    const deletedCategory=await categoryModel.findByIdAndDelete(req.params.id)
    if(!deletedCategory) throw new MyError("no category with that id")
    
    res.status(200).json({
      success:true,
      message:"the category deleted",
      data:deletedCategory
    })
  }
);
