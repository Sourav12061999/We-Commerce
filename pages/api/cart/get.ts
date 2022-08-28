import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../server/dbConnect";
import Cart from "../../../server/schemas/cart.scheme";
import Products from "../../../server/schemas/product.schema";
import {models,model} from "mongoose";
import {productSchema} from "../../../server/schemas/product.schema"
dbConnect();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      res.status(400).json({
        isError: true,
        msg: `${req.method} is not possible on this route`,
      });
      return;
    }
    models.products || model("products",productSchema);
    let data = await  Cart.findOne({ userid: req.query.userid })
     .populate("products")
     .lean()
     .exec();
    if (!data) {
      res.status(200).json({ isSuccess: true, products: [] });
    } else {
      res.status(200).json({ isSuccess: true, products: data.products });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json(error);
  }
}
