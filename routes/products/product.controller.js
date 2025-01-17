const service = require("./product.service");
const joi = require("joi");

class controller {
    async getProducts(payload) {
        try {
            const data = await service.getProducts(payload);
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

    async createProduct(payload) {
        try {
            const data = await service.createProduct(payload);
            console.log("payload from controllers.createproduct " + payload);
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

    async createOrUpdateProduct(payload) {
        try {
            const data = await service.createOrUpdateProduct(payload);
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

    async patchProduct(payload) {
        try {
            const data = await service.patchProduct(payload);
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

    async deleteProduct(payload) {
        try {
            const data = await service.deleteProduct(payload);
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
