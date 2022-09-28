require("dotenv").config();

const http = require("http");
const  connectDb  = require("./services/mongo");
const app = require('./app')

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
  await connectDb();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
