import express from "express";
import { ROUTES } from "./routes.js";
import { setupLogging } from "./logging.js";
import { setupProxies } from "./proxy-setup/proxy.js";
import cors from "cors";

const app = express();
const port = 8080; // COMMON PORT

app.use(cors());

setupLogging(app);
setupProxies(app, ROUTES);

app.listen(port, () => {
  console.log(`Gateway app listening at http://host.docker.internal:${port}`);
});
