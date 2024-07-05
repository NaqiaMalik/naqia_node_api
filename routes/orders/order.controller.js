const service = require("./order.service");
const joi = require("joi");

class controller {
    async getOrders(payload) {
        try {
            const data = await service.getOrders(payload);
            return {
                success: true,
                message: "Success",
                data
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async createOrder(payload) {
        try {
            const data = await service.createOrder(payload);
            console.log("payload from controllers.createorder " + payload);
            return {
                success: true,
                message: "Success",
                data
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async createOrUpdateOrder(payload) {
        try {
            const data = await service.createOrUpdateOrder(payload);
            return {
                success: true,
                message: "Success",
                data
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async patchOrder(payload) {
        try {
            const data = await service.patchOrder(payload);
            return {
                success: true,
                message: "Success",
                data
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async deleteOrder(payload) {
        try {
            const data = await service.deleteOrder(payload);
            return {
                success: true,
                message: "Success",
                data
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
}

module.exports = new controller();
