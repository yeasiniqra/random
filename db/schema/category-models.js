// const { Schema } = require("mongoose");
import mongoose, { Schema } from "mongoose";


const category = new Schema({
    name:{
        type: String,
        required: true,
    }
})

export const categoryModel = mongoose.models.categorys || mongoose.model("categorys", category);