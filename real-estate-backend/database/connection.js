const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDB = (url) => {
  mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
};

module.exports = connectDB;
