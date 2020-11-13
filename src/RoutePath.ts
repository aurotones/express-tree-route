import * as path from "path";
import { Request, Response, NextFunction } from "express";

type Methods = "get" | "post" | "patch" | "put" | "update" | "delete";

const methods: Methods[] = ["get", "post", "patch", "put", "update", "delete"];

function routePath(sourceDir: string, methodPath: string): any {
    let filePath = methodPath.replace(/:\w+(\/|)/gi,"");
    filePath = filePath.replace(/\/$/,"");
    return [
        methodPath,
        (req: Request, res: Response, next: NextFunction) => {
            const apiPath = path.join(sourceDir, filePath);
            const method = req.method.toLocaleLowerCase();
            const apiFunction = require(apiPath).default;
            if (methodValid(apiFunction)){
                if (Array.isArray(apiFunction[method]) && apiFunction[method].length > 0){
                    if (typeof apiFunction[method][0] === "function"){
                        apiFunction[method][0](req, res, next);
                    } else if (Array.isArray(apiFunction[method][0])){
                        execHandler(apiFunction[method][0], req, res, next);
                    }
                } else {
                    next();
                }
            } else {
                next();
            }
        },
        (req: Request, res: Response, next: NextFunction) => {
            const apiPath = path.join(sourceDir, filePath);
            const method = req.method.toLocaleLowerCase();
            const apiFunction = require(apiPath).default;
            if (methodValid(apiFunction)){
                if (Array.isArray(apiFunction[method]) && apiFunction[method].length > 1){
                    apiFunction[method][1](req, res, next);
                } else {
                    next();
                }
            } else {
                next();
            }
        }
    ]
}

function execHandler(handlers, req: Request, res: Response, next: NextFunction){
    let i = 0;
    function exec(){
        handlers[i](req, res, () => {
            if (handlers.length === (i + 1)){
                next();
            } else {
                i++;
                exec();
            }
        });
    }
    exec();
}

function methodValid(func: any): boolean {
    let valid = false;
    if (typeof func === "object"){
        methods.forEach((method) => {
            if (typeof func[method] === "function"){
                valid = true;
            } else if (Array.isArray(func[method])){
                func[method].forEach((subMethod) => {
                    if (typeof subMethod === "function"){
                        valid = true;
                    } else if (Array.isArray(subMethod)){
                        subMethod.forEach((handlerMethod) => {
                            if (typeof handlerMethod === "function"){
                                valid = true;
                            }
                        });
                    }
                });
            }
        })
    }
    return valid;
}

export default routePath;