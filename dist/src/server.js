"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const video_routes_1 = require("./routes/video.routes");
const app = (0, express_1.default)();
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log(process.env);
app.use(express_1.default.json());
app.use('/user', user_routes_1.userRoutes);
app.use('/video', video_routes_1.videosRoutes);
app.listen(4000);
