"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const posts_route_1 = require("./routes/posts.route");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.server.use((0, cors_1.default)());
        this.server.use(express_1.default.json());
        this.server.use((0, helmet_1.default)());
    }
    routes() {
        this.server.use("/api", posts_route_1.postRoutes);
    }
}
exports.default = new App().server;
