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
        try {
            const data = await service.createCustomer(payload);
            console.log("payload from controllers.createcustomer " + payload);
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

    async createOrUpdateCustomer(payload) {
        try {
            const data = await service.createOrUpdateCustomer(payload);
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

    async patchCustomer(payload) {
        try {
            const data = await service.patchCustomer(payload);
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

    async deleteCustomer(payload) {
        try {
            const data = await service.deleteCustomer(payload);
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
