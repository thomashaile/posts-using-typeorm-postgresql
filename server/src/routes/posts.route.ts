import { Router } from "express";
import * as controller from "../controllers/posts.controller";
const routes = Router();

routes.get("/posts", controller.getAllPosts);
routes.get("/post/:id", controller.getOnePost);
routes.post("/post", controller.createPost);
routes.put("/post/:id", controller.updatePost);
routes.delete("/post/:id", controller.removePost);

export { routes as postRoutes };
