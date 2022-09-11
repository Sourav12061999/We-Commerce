import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../server/dbConnect";
import Product from "../../../../server/schemas/product.schema";
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
      return true;
    }
    let searchParam = req.query.search!;
    let user;
    if (typeof searchParam == "string") {
      user = await Product.find({ brand: { $regex: searchParam, $options:"i" } })
      .limit(10)
        .lean()
        .exec();
    }
    res.status(200).json({ isError: false, user });
  } catch (error) {
    res.status(400).json({ isError: true });
  }
}
