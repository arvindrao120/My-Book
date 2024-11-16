import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors"
import userRoute from "./route/user.route.js"

const app = express();
dotenv.config();

//Listing Port
const PORT = process.env.port || 4000;
app.listen(PORT, () => {
  console.log(`App is listing on port : ${PORT}`);
});

app.use(cors())
app.use(express.json())


// Coonection of mongoDb

const mongoos_url = "mongodb://localhost:27017/book";

async function main() {
  await mongoose.connect(mongoos_url);
}
main()
  .then(() => {
    console.log("Connected with MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });

  // Routes
app.get("/", (req, res) => {
  res.send("Mern Projects");
});

app.get("/book",bookRoute)
app.use("/user",userRoute)
