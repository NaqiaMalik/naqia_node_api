const Customer = require("../../models/customer");

class service {
    async getCustomers(payload) {
        const data = await Customer.query().where(payload);
        return data;
    }

    async createCustomer(payload) {
        try {
            const full_name = payload.full_name;
            const email = payload.email;
            // const email = payload.email || ""; // set default value to empty string if undefined

            // console.log("payload from service.createcustomer " + full_name);
            const data = await Customer.query().insert({ full_name, email });
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async createOrUpdateCustomer(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            const { full_name, email } = payload;
            console.log("id check from payload" + id);
            const data = await Customer.query().findById(id);
            if (!data) {
                console.log("User not found");
                return data;
            } else {
                await Customer.query().update({
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

    async patchCustomer(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            const { full_name, email } = payload;
            console.log("id check from payload" + id);
            const data = await Customer.query().findById(id);
            if (!data) {
                console.log("User not found");
                return data;
            } else {
                await Customer.query().findById(id).patch({
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

    async deleteCustomer(payload) {
        console.log(payload);
        try {
            const id = payload.id;
            console.log("id check from payload" + id);
            const data = await Customer.query().delete().where({ id });

            return data;
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = new service();
