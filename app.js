const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const responseTime = require("response-time");
const moment = require("moment");

const app = express();
const router = express.Router();

const appRouter = require("./routes");

router.get("/health", (req, res) => res.send("ok"));
morgan.token("date", () => moment().format("YYYY-MM-DD HH:mm:ss"));

app
    .use(responseTime())
    .use((req, res, next) => { req.currentTime = Date.now(); next(); })
    .use(helmet.frameguard())
    .use(helmet.hidePoweredBy())
    .use(helmet.noSniff())
    .use(helmet.referrerPolicy())
    .use(helmet.xssFilter())
    .use(helmet.dnsPrefetchControl())
    .use(cors({ origin: "*" }))
    .use(morgan("[:date] :remote-addr :method :url :response-time ms - :status"))
    .use(bodyParser.urlencoded({ limit: "100mb", extended: false }))
    .use(bodyParser.json({ limit: "100mb" }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, "public")))
    .use("/", appRouter);

module.exports = app;
