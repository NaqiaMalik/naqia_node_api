// require("dotenv").config();

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "envs", ".env.dev.api") });
const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

const users = [];
const port = process.env.TOKEN_SERVER_PORT;
const jwt = require("jsonwebtoken");
// refreshTokens
const refreshTokens = [];

app.use(express.json());

// accessTokens
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

function generateRefreshToken(user) {
    const refreshToken =
        jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "20m" });
    refreshTokens.push(refreshToken);
    return refreshToken;
}

app.post("/createUser", async (req, res) => {
    const user = req.body.name;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({ user, password: hashedPassword });
    res.status(201).send(users);
    console.log(users);
});

// AUTHENTICATE LOGIN AND RETURN JWT TOKEN
app.post("/login", async (req, res) => {
    const user = users.find((c) => c.user == req.body.name);
    // check to see if the user exists in the list of registered users
    if (user == null) res.status(404).send("User does not exist!");
    // if user does not exist, send a 400 response
    if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = generateAccessToken({ user: req.body.name });
        const refreshToken = generateRefreshToken({ user: req.body.name });
        res.json({ accessToken, refreshToken });
    } else {
        res.status(401).send("Password Incorrect!");
    }
});

app.listen(port, () => {
    console.log(`Authorization Server running on ${port}...`);
});
