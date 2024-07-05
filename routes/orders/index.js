const express = require("express");
const router = express.Router();
const controller = require("./order.controller");

router.get("/", async (req, res, next) => {
    const result = await controller.getOrders(req.query);
    res.send(result);
});

router.post("/", async (req, res, next) => {
    const result = await controller.createOrder(req.body);
    console.log("request body" + req.body);
    res.send(result);
});

router.put("/:id", async (req, res, next) => {
    const result = await controller.createOrUpdateOrder({ ...req.body, ...req.params });
    res.send(result);
});

router.patch("/:id", async (req, res, next) => {
    const result = await controller.patchOrder({ ...req.body, ...req.params });
    res.send(result);
});

router.delete("/:id", async (req, res, next) => {
    const result = await controller.deleteOrder(req.params);
    res.send(result);
});

module.exports = router;
