const Customer = require("../../models/customer");

class service {
    async getCustomers(payload) {
        const data = await Customer.query().where(payload);
        return data;
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

module.exports = new service();
