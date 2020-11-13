"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoutePath_1 = __importDefault(require("./RoutePath"));
function Routes(dirname, routes) {
    const router = express_1.Router();
    routes.forEach((route) => {
        router.use(...RoutePath_1.default(dirname, route));
    });
    return router;
}
exports.default = Routes;
