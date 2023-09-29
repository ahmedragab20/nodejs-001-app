import { createServer } from "http";
import { app, port } from "./app";
const server = createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
