const router = require("express").Router();
const Product = require("../Models/Product");

router.get("/", async (req, res) => {
  const { cat } = req.query;
  const { search } = req.query;
  let data = [];
  if (cat) {
    data = await Product.find({ category: cat });
  } else if (search) {
    let products = await Product.find({});
    for (let d of products) {
      const isFind = d.name.toLowerCase().includes(search.toLowerCase());
      if (isFind) {
        data.push(d);
      }
    }
  } else {
    data = await Product.find({});
  }
  res.json(data);
});

router.post("/");

module.exports = router;
