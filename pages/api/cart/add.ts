import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../server/dbConnect";
import Cart from "../../../server/schemas/cart.scheme";
import productExist from "../../../server/utils/checkExists";
import Product from "../../../server/schemas/product.schema";
dbConnect();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.status(400).json({
        isError: true,
        msg: `${req.method} is not possible on this route`,
      });
      return;
    }
    let productid = req.body.productid;
    let userid = req.body.userid;

    let data = await Cart.findOne({ userid }).lean().exec();
    if (!data) {
      data = await Cart.create({ userid, products: [productid] });
      let productData = await Product.findById(productid);
      data.products = [productData];
    } else {
      if (productExist(productid, data.products) == true) {
        res.status(200).json({ isSuccess: false });
        return;
      }
      data.products.push(productid);
      data = await Cart.findOneAndUpdate({ userid }, data, {
        new: true,
      }).populate("products");
    }
    res.status(200).json({ isSuccess: true, products: data.products });
  } catch (error) {
    console.log(error);

    res.status(200).json(error);
  }
}
