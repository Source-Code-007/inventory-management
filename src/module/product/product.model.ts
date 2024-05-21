import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const variantsSchema = new Schema({
    type: {type: String, required:true},
    value: {type: String, required:true},
}, {_id: false})

const productSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "Product name is required"] },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: { type: Number, required: [true, "Product number is required"] },
  category: { type: String, required: [true, "Product category is required"] },
  // TODO: confusion about values of variants
  tags: { type: [String], required: [true, "Product tags is required"] },
  variants: {
    type: [variantsSchema],
    required: [true, "Product variant is required"],
  },
  inventory: { quantity: {type: Number, required: true}, inStock: {type: Boolean, required: true} },
});

const ProductModel = model("product", productSchema);

export default ProductModel;
