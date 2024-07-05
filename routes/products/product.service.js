const Product = require("../../models/product");

class service {
    async getProducts(payload) {
        const data = await Product.query().where(payload);
        return data;
    }

    async createProduct(payload) {
        try {
            const product_name = payload.product_name;
            const price = payload.price;
            const data = await Product.query().insert({ product_name, price });
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async createOrUpdateProduct(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            const { product_name, price } = payload;
            console.log("id check from payload" + id);
            const data = await Product.query().findById(id);
            if (!data) {
                console.log("Product not found");
                return data;
            } else {
                await Product.query().update({
                    id,
                    product_name,
                    price
                }).onConflict("id")
                    .merge();
                console.log("Product update" + data);
            }
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async patchProduct(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            const { product_name, price } = payload;
            console.log("id check from payload" + id);
            const data = await Product.query().findById(id);
            if (!data) {
                console.log("Product not found");
                return data;
            } else {
                await Product.query().findById(id).patch({
                    product_name,
                    price
                });
                console.log("Product update by patch" + data);
            }
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteProduct(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            console.log("id check from payload" + id);
            const data = await Product.query().delete().where({ id });

            return data;
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = new service();
