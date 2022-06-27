import express from "express";
import cors from "cors";
import helmet from "helmet";
import { postRoutes } from "./routes/posts.route";

class App {
  public server;
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }
  private middleware() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(helmet());
  }
  private routes() {
    this.server.use("/api", postRoutes);
  }
}
export default new App().server;
