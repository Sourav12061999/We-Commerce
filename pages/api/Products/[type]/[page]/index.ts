import type { NextApiRequest, NextApiResponse } from "next";
import DBConnect from "../../../../../server/dbConnect";
import Products from "../../../../../server/schemas/product.schema";
import { skip } from "../../../../../server/utils/skip";
import { filter } from "../../../../../server/utils/filter";
DBConnect();

const No_Of_Products_Per_Page = 12;
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
    if (req.query.page && Number.isNaN(+req.query.page)) {
      res.status(400).json({
        isError: true,
        msg: `${req.query.page} is not a valid page number`,
      });
      return;
    }
    let page = +req.query.page!;
    let type = req.query.type!;
    let brand = req.query.brand;
    let price = req.query.price;
    let catagory = req.query.catagory;

    let find = filter(brand, price, catagory, type);
    let data = await Products.find(find)
      .limit(No_Of_Products_Per_Page * page)
      .lean()
      .exec();
    data = skip(data, No_Of_Products_Per_Page * (page - 1));
    let length = await Products.find(find).count();
    res
      .status(200)
      .json({
        isError: false,
        pages: Math.ceil(length / No_Of_Products_Per_Page),
        data,
      });
  } catch (error) {
    res.status(400).json({ isError: true });
    console.log(error);
  }
}
