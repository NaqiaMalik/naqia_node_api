require("./init")();
require("./db");

const { PORT } = process.env;
const app = require("./app");
app.listen(PORT, () => { console.log("server is started on : ", PORT); });
