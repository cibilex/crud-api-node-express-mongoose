const mongoose=require("mongoose")
const uniqueValidator=require("mongoose-unique-validator")

const Schema=mongoose.Schema;

const CategorySchema=new Schema({
    title:{
        type:String,
        minlength:[3,"title must be greater than three"],
        required:[true,"pls enter to title"],
        trim:true,
        unique:true,
        uniqueCaseInsensitive:true
    },
    description:{
        type:String,
        minlength:[5,"description must be greater than five"],
        required:[true,"pls enter to description"]
    }
},{timestamps:true}) 

CategorySchema.plugin(uniqueValidator,{message:'{PATH} already exist.'})
const Category=mongoose.model("Category",CategorySchema,"Categories")

module.exports=Category