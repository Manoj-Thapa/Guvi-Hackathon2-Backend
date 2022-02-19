const router = require("express").Router();
const Cateogry = require("../Models/Category");

router.get("/", async (req, res) => {
  const data = await Cateogry.find({});
  res.json(data);
});

module.exports = router;
