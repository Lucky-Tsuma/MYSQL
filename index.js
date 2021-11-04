const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
})