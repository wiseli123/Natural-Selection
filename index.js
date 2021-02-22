const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.render("views/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});