import { createServer } from "http";
import mongoose from "mongoose";
import { app, port } from "./app";

const mdb = `mongodb+srv://rgbxO:${process.env.MONGOBD_PASSWORD}@cluster0.irpemng.mongodb.net/rgbxODB?retryWrites=true&w=majority`;

const server = createServer(app);

mongoose.connection.on("error", (err) => {
  console.log("☢️ Error connecting to database");

  console.log(err);
});

mongoose.connection.on("disconnected", () => {
  console.log("❌ Disconnected from database");
});

mongoose.connection.on("reconnectFailed", () => {
  console.log("‼️ Reconnection to database failed");
});

mongoose.connection.on("reconnected", () => {
  console.log("♻️ Reconnected to database");
});

mongoose.connection.once("open", () => {
  console.log("🚀 Connection to database opened");
});

async function connect() {
  console.log("Connecting to database...");
  await mongoose
    .connect(mdb)
    .then(() => {
      server.listen(port, () => {
        console.log(`✅ Connected to the database and the Server listening on port ${port}`);
      });
    })
    .catch((err) => {
      console.log(err);
      console.log("Retrying...");
      setTimeout(connect, 5000);
    })
}

(async () => {
  await connect();
})();
