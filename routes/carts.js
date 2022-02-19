const router = require("express").Router();
const Cart = require("../Models/Cart");

router.get("/", async (req, res) => {
  const data = await Cart.find({});
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = new Cart(req.body);
  await data.save();
  res.json({ msg: "Cart Added Sucessfully." });
});

router.delete("/", async (req, res) => {
  const { name } = req.body;
  const data = await Cart.findOneAndDelete({ name });
  res.json({ msg: "Item Removed From Cart Successfully." });
});

module.exports = router;
