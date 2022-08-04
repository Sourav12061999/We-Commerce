import { Schema,model,models } from "mongoose";

const productSchema= new Schema({
    brand:String,
    name:String,
    price:Number,
    size:[String],
    catagory:String,
    img:String,
    type:String,
})
const Product = models.products || model("products",productSchema);

export default Product;