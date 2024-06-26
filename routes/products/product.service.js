const Product = require("../../models/product");

class service {
    async getProducts(payload) {
        const data = await Product.query().where(payload);
        return data;
    }

    async createProduct(payload) {
        // const data = await Product.query().where(payload);
        // return data;
    }

    async createOrUpdateProduct(payload) {
        // const data = await Product.query().where(payload);
        // return data;
    }

    async patchProduct(payload) {
        // const data = await Product.query().where(payload);
        // return data;
    }

    async deleteProduct(payload) {
        // const data = await Product.query().where(payload);
        // return data;
    }
}

module.exports = new service();
