const express = require("express");
const router = express.Router();
const controller = require("./customer.controller");

router.get("/", async (req, res, next) => {
    const result = await controller.getCustomers(req.query);
    res.send(result);
});

router.post("/", async (req, res, next) => {
    const result = await controller.createCustomer(req.body);
    console.log("request body" + req.body);
    res.send(result);
});

router.put("/:id", async (req, res, next) => {
    const result = await controller.createOrUpdateCustomer({ ...req.body, ...req.params });
    res.send(result);
});

router.patch("/:id", async (req, res, next) => {
    const result = await controller.patchCustomer({ ...req.body, ...req.params });
    res.send(result);
});

router.delete("/:id", async (req, res, next) => {
    const result = await controller.deleteCustomer(req.params);
    res.send(result);
});

module.exports = router;
