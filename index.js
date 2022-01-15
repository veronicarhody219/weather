require("dotenv").config();
const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
// test route
app.get("/", (req, res) => res.json({success: "hello world"}));

app.use("/weather",weather)


app.listen(port, () => console.log(`Listening on port ${port}`));

