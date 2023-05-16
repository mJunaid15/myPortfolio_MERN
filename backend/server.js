import { app } from "./app.js";
import dotenv from "dotenv";
import {connectDatabase} from "../backend/config/database.js";
import { v2 as cloudinary } from 'cloudinary'

dotenv.config({ path: "./backend/config/config.env" });

connectDatabase();

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
  secure: true
})

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port:  ${process.env.PORT}`);
});
