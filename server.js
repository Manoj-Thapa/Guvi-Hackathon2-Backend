const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const catRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const cartRoute = require("./routes/carts");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const cors = require("cors");

const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

const app = express();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB Successfully."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/categories", catRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);

app.get("/", (req, res) => {
  res.json({
    message:
      "To visit our Rental App got to https://guvi-hackathon2-manojkumarthapa.netlify.app",
  });
});

app.post("/api/contactus", (req, res) => {
  const { name, email, number, message } = req.body;
  res.json({
    response: "Thank you for contacting us. We will get back to you soon.",
    name,
    email,
    number,
    message,
  });
});

app.post("/api/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = req.body.amount;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  const response = await razorpay.orders.create(options);
  res.json({
    id: response.id,
    amount: response.amount,
    currency: response.currency,
  });
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}.`);
});
