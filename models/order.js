const { Model } = require("objection");

class Customer extends Model {
    static get tableName() {
        return "order";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "email", "address"],
            properties: {
                id: { type: "integer" },
                name: { type: "string", minLength: 1, maxLength: 255 },
                email: { type: "string", minLength: 1, maxLength: 255 },
                address: { type: "string", minLength: 1, maxLength: 255 }
            }
        };
    }

    static get relationMappings() {
        const Customer = require("./order");
        return {
            channel: {
                relation: Model.HasManyRelation,
                modelClass: Customer,
                join: {
                    from: "customer.orderId",
                    to: "order.id"
                }
            }
        };
    }
}
