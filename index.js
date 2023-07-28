const express = require("express");

const app = express();
const port = process.env.PORT || 8800;

app.listen(port, (req, res) => {
   console.log(`connected to the backend`);
})