const express = require("express");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth/auth.route");
const userRoute = require("./routes/users/users.router");
const hotelRoute = require("./routes/hotels/hotels.router");
const roomRoute = require("./routes/rooms/rooms.router");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

module.exports = app;
