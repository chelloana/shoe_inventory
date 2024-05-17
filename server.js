const path = require("path");
const express = require("express");
const app = express();

// Serve index.html saat permintaan root URL ("/")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serve login.html saat permintaan "/login.html"
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}...`);
});
