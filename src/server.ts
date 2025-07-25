import express from "express";
import helmet from "helmet";
import { routerMain } from "./routes";
import path from "path";
import mustache from "mustache-express";

const server = express();

server.use(helmet());
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));
server.use("/", routerMain);

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());
server.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
