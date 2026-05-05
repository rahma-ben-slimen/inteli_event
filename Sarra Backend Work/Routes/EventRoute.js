const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("../Routes/PublicRoutes"));
app.use("/api/admin", require("../Routes/AdminRoutes"));
app.use("/api/org", require("../Routes/OrgRouter"));
app.use("/api/part", require("../Routes/PartRoutes"));
app.use("/api/auth", require("../Routes/AuthRoutes"));

module.exports = app;
