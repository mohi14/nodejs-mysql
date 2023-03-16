const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const app = express();

var corOptions = {
  origin: "https://localhost:8082",
};

// middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers

const productRoutes = require("./Routes/productRoutes");
const reviewRoutes = require("./Routes/productRoutes");

app.use("/api/products/", productRoutes);
app.use("api/reviews/", reviewRoutes);

//  testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

// port

// server

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
