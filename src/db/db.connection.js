import mongoose from "mongoose";

async function connectDB() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("DB connected");
    })  
    .catch((error) => {
      console.log("DB not connected", error.message);
    });
}

export default connectDB;