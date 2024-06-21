const { Model } = require("objection");

class Customer extends Model {
    static get tableName() {
        return "product";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title", "price"],
            properties: {
                id: { type: "integer" },
                title: { type: "string", minLength: 1, maxLength: 255 },
                price: { type: "double", minLength: 1, maxLength: 255 }
            }
        };
    }

    static get relationMappings() {
        const Order = require("./order");
        return {
            channel: {
                relation: Model.HasManyRelation,
                modelClass: Order,
                join: {
                    from: "product.orderId",
                    to: "order.id"
                }
            }
        };
    }
}
