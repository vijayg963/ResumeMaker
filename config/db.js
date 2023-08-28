import mongoose from "mongoose";
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWD}@pdf.yoclr9d.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database not connected", error);
  });
