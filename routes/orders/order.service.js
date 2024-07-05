const Order = require("../../models/order");

class service {
    async getOrders(payload) {
        const data = await Order.query().where(payload);
        return data;
    }

    async createOrder(payload) {
        try {
            const full_name = payload.full_name;
            const email = payload.email;
            const data = await Order.query().insert({ full_name, email });
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async createOrUpdateOrder(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            const { full_name, email } = payload;
            console.log("id check from payload" + id);
            const data = await Order.query().findById(id);
            if (!data) {
                console.log("User not found");
                return data;
            } else {
                await Order.query().update({
                    id,
                    full_name,
                    email
                }).onConflict("id")
                    .merge();
                console.log("User update" + data);
            }
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async patchOrder(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            const { full_name, email } = payload;
            console.log("id check from payload" + id);
            const data = await Order.query().findById(id);
            if (!data) {
                console.log("User not found");
                return data;
            } else {
                await Order.query().findById(id).patch({
                    full_name,
                    email
                });
                console.log("User update by patch" + data);
            }
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteOrder(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            console.log("id check from payload" + id);
            const data = await Order.query().delete().where({ id });

            return data;
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = new service();
