require('dotenv').config()
const express = require("express");
const mongoose =require("mongoose");
const proudctRoute = require("./routes/productsRoutes");
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors');
const app = express();

const MONG_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000



app.use(express.json());
app.use(cors());





// routes 
app.use("/api/products", proudctRoute);



app.get("/", (req, res) => {
  // throw new Error ("fake")
  res.send("Hello NODE ");
});

app.use(errorMiddleware);

mongoose
  .connect(MONG_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`mern curd ${PORT}`);
    });
    console.log("conntect mongodb");
  })
  .catch((error) => {
    console.log(error);
  });
