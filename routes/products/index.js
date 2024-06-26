const express = require("express");
const router = express.Router();
const controller = require("./product.controller");

router.get("/", async(req, res, next) => {
    const result = await controller.getProducts(req.query);
    res.send(result);
});

router.post("/", async (req, res, next) => {
    const result = await controller.createProduct(req.body);
    res.send(result);
});

router.put("/:id", async (req, res, next) => {
    const result = await controller.createOrUpdateProduct({ ...req.body, ...req.params });
    res.send(result);
});

router.patch("/:id", async (req, res, next) => {
    const result = await controller.patchProduct({ ...req.body, ...req.params });
    res.send(result);
});

router.delete("/:id", async (req, res, next) => {
    const result = await controller.deleteProduct(req.params);
    res.send(result);
});

module.exports = router;
