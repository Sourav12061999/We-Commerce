import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../server/dbConnect";
import Products from "../../../../server/schemas/product.schema";
dbConnect();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let productData = await Products.findById(req.query.productid)
      .lean()
      .exec();
    if (!productData) {
      res.status(200).json({ isError: false, isSuccess: false });
      return;
    }

    let similarData = await Products.find({
      brand: productData.brand,
      type: productData.type,
    })
      .limit(12)
      .lean()
      .exec();
    res
      .status(200)
      .json({ isError: false, isSuccess: true, productData, similarData });
  } catch (error) {
    res.status(400).json({ isError: true });
    console.log(error);
  }
}
