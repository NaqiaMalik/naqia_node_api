const express = require("express");
const router = express.Router();

router.use("/customers", require("./customers"));
router.use("/products", require("./products"));
router.use("/orders", require("./orders"));

module.exports = router;
