import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(process.env.mongodb_url!, {
    useUnifiedTopology: true,
  });
};

export default dbConnect;
