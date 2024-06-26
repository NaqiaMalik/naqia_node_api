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

    }

    async createOrUpdateCProduct(payload) {

    }

    async patchProduct(payload) {

    }

    async deleteProduct(payload) {

    }
}

module.exports = new controller();
