const { Model } = require("objection");

class Customer extends Model {
    static get tableName() {
        return "customers";
    }
}

module.exports = Customer;
