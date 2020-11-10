import { Router } from "express";
import RoutePath from "./RoutePath";

export default function Routes(dirname: string, routes: string[]){
    const router = Router();
    routes.forEach((route: string) => {
        router.use(...RoutePath(dirname, route));
    });
    return router;
}