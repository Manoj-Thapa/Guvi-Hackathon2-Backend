const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("../Models/Product");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB Successfully."))
  .catch((err) => console.log(err));

const data = [
  {
    category: "Electronics",
    name: "82 Class TU7000 Crystal UHD 4K Smart TV",
    price: 4000,
    photo: "https://tinyurl.com/renttv",
  },
  {
    category: "Electronics",
    name: "Hummer Bluetooth Wireless Speaker",
    price: 699,
    photo: "https://tinyurl.com/rentspeaker",
  },
  {
    category: "Furniture",
    name: "Betrillo Gray Sofa & Loveseat",
    price: 1990,
    photo: "https://tinyurl.com/rentsofa",
  },
  {
    category: "Furniture",
    name: "3 PC Desk Set",
    price: 2290,
    photo: "https://tinyurl.com/rentdesktable",
  },
  {
    category: "Appliances",
    name: "12,000 BTU Air Conditioner",
    price: 2290,
    photo: "https://tinyurl.com/rentaircond",
  },
  {
    category: "Appliances",
    name: "Conservator Brand 3.5 cu ft Extra Large Capacity Washer",
    price: 1299,
    photo: "https://tinyurl.com/rentwasher",
  },
  {
    category: "Mattresses",
    name: "Mattress With Adjustable Base",
    price: 3799,
    photo: "https://tinyurl.com/rentmat",
  },
  {
    category: "Mattresses",
    name: "5 Twin XL Foundation",
    price: 599,
    photo: "https://tinyurl.com/rentbase",
  },
];

const addCategory = async (data) => {
  await Product.deleteMany({});
  const products = await Product.insertMany(data);
};

addCategory(data);
