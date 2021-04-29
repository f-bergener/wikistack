const router = require("express").Router();
const addPage = require("../views/addPage"); // Other way is const { addPage } = require("../views");

router.get("/", (req, res) => {
  res.send("Wiki get");
});

router.post("/", (req, res) => {
  res.send(res.json(req.body));
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
