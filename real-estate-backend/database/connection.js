const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
mongoose.set("strictQuery", false);
const connectDB = (url) => {
  mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
};

module.exports = connectDB;
