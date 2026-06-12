import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(
      ` --- Connecting to MongoDB for customer-auth microservice --- `.cyan
    );

    const conn = await mongoose.connect(process.env.DB_URL);

    console.log(` --- MongoDB Connected --- `.cyan);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
