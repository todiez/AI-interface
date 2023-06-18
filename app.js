const express = require("express");

const { generateMeta, generateImage } = require("./controllers/openaiController");

//app setup
const app = express();

// Choose the port and start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

//middleware
app.use(express.json());



