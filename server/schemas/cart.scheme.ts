import { Schema, model, models } from "mongoose";

const cartSchema = new Schema({
  userid: { type: Schema.Types.ObjectId, ref: "users" },
  products: [{ type: Schema.Types.ObjectId, ref: "products" }],
});
const Cart = models.carts || model("carts", cartSchema);

export default Cart;
