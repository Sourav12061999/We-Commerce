import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../server/dbConnect";
import User from "../../../server/schemas/user.schema";
import bCrypt from "bcrypt";
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
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user === null) {
      res.status(200).json({
        isError: false,
        isSuccess: false,
        msg: "This user doesn't exists",
      });
      return;
    }
    let compare = await bCrypt.compare(req.body.password, user.password);
    if (compare === false) {
      res.status(200).json({
        isError: false,
        isSuccess: false,
        msg: "Wrong email or password",
      });
    }
    res.status(200).json({
      isError: false,
      isSuccess: true,
      msg: "Sign in Successful",
      userData: user,
    });
  } catch (error) {
    res.status(400).json({ isError: true, isSuccess: false });
  }
}
