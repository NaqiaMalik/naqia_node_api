const { Model, knexSnakeCaseMappers } = require("objection");
const {
    DB_CLIENT,
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASS,
    DB_CON_MIN,
    DB_CON_MAX
} = process.env;

const db = require("knex")({
    client: DB_CLIENT,
    connection: {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASS,
        database: DB_NAME
    },
    pool: {
        min: parseInt(DB_CON_MIN || "5"),
        max: parseInt(DB_CON_MAX || "50")
    },
    ...knexSnakeCaseMappers()
});

Model.knex(db);

module.exports = db;
