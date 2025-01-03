const express = require("express");
// const cors = require("cors");

const app = express();
const port = 3000;

// app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (_, res) => {
  res.status(200).json({ msg: "Hello from Backend" });
});

app.post("/api", (req, res) => {
  const name = req.body.name;
  res.status(200).json({ msg: `Hi ${name} from Backend` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
