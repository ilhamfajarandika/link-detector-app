const express = require("express");
const cors = require("cors");
const detectRoute = require("./routes/detectRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", detectRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
