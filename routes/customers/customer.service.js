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
            const data = await Customer.query().insert({ full_name, email });
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async createOrUpdateCustomer(payload) {
        console.log(payload);
        try {
            const { id, full_name, email } = payload;
            console.log("id come from payload" + id);
            // Check if the customer exists
            let customer = await Customer.query().findById(id);
            console.log("Customer assign by fetching data:", customer);
            if (customer != null) {
                // Update existing customer
                customer = await Customer.query()
                    .patchAndFetchById(id, { full_name, email });
                console.log("Customer updated:", customer);
            } else {
                // Create new customer
                customer = await Customer.query().insert({ full_name, email });
                console.log("Customer created:", customer);
            }
            return customer;
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
            return {
                success: false,
                message: error.message
            };
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
