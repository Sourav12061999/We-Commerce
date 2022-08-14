import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../server/dbConnect";
import User from "../../../server/schemas/user.schema";
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
    let user = await User.findById(req.query.user).lean().exec();
    res.status(200).json({ isError: false, user });
  } catch (error) {
    res.status(400).json({ isError: true });
  }
}
