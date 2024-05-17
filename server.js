const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // Membaca file index.html dari direktori yang sama dengan server.js
    res.sendFile(path.join(__dirname, "login.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}...`);
});
