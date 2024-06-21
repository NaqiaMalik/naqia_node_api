const service = require("./customer.service");
const joi = require("joi");

class controller {
    async getCustomers(payload) {
        try {
            const data = await service.getCustomers(payload);
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

    async createCustomer(payload) {

    }

    async createOrUpdateCustomer(payload) {

    }

    async patchCustomer(payload) {

    }

    async deleteCustomer(payload) {

    }
}

module.exports = new controller();
