const mongoose = require("mongoose");
require("dotenv").config();
const Cateogry = require("../Models/Category");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB Successfully."))
  .catch((err) => console.log(err));

const data = [
  {
    name: "Electronics",
    photo: "https://tinyurl.com/rentelect",
  },
  {
    name: "Furniture",
    photo: "https://tinyurl.com/rentfur",
  },
  {
    name: "Appliances",
    photo: "https://tinyurl.com/rentappli",
  },
  {
    name: "Mattresses",
    photo: "https://tinyurl.com/rentmat",
  },
];

const addCategory = async (data) => {
  await Cateogry.deleteMany({});
  const categories = await Cateogry.insertMany(data);
};

addCategory(data);
