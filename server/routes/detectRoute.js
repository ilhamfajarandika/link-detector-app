const express = require("express");
const router = express.Router();

const detectLink = require("../../utils/detectLink");

router.post("/detect", (req, res) => {
  const { url } = req.body;

  console.log("URL RECEIVED:", url);

  const result = detectLink(url);

  console.log("RESULT:", result);

  res.json(result);
});

module.exports = router;
