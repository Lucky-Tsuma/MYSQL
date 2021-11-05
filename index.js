const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const port = process.env.APP_PORT;
const userRouter = require("./api/users/user.router");

app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
})