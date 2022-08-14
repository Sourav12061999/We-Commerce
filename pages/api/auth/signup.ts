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
        msg: `${req.method} request is not possible on this route`,
      });
      return;
    }
    let findUser = await User.findOne({ email: req.body.email }).lean().exec();
    if (findUser !== null) {
      res.status(200).json({
        isError: false,
        isSuccess: false,
        msg: "User with same email already exists",
      });
      return;
    }
    let salt = await bCrypt.genSalt();
    let hashedPassword = await bCrypt.hash(req.body.password!, salt);
    let user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      salt,
    });

    res.status(200).json({
      isError: false,
      isSuccess: true,
      msg: "Sign up Successful",
      userData: user,
    });
  } catch (error) {
    res.status(400).json({ isError: true, isSuccess: false });
  }
}
