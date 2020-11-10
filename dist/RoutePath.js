"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const methods = ["get", "post", "patch", "put", "delete"];
function routePath(sourceDir, methodPath) {
    let filePath = methodPath.replace(/:\w+(\/|)/gi, "");
    filePath = filePath.replace(/\/$/, "");
    return [
        methodPath,
        (req, res, next) => {
            const apiPath = path.join(sourceDir, filePath);
            const method = req.method.toLocaleLowerCase();
            const apiFunction = require(apiPath).default;
            if (methodValid(apiFunction)) {
                if (Array.isArray(apiFunction[method]) && apiFunction[method].length > 0) {
                    if (typeof apiFunction[method][0] === "function") {
                        apiFunction[method][0](req, res, next);
                    }
                    else if (Array.isArray(apiFunction[method][0])) {
                        apiFunction[method][0].forEach((handlers) => {
                            handlers(req, res, next);
                        });
                    }
                }
                else {
                    next();
                }
            }
            else {
                next();
            }
        },
        (req, res, next) => {
            const apiPath = path.join(sourceDir, filePath);
            const method = req.method.toLocaleLowerCase();
            const apiFunction = require(apiPath).default;
            if (methodValid(apiFunction)) {
                if (Array.isArray(apiFunction[method]) && apiFunction[method].length > 1) {
                    apiFunction[method][1](req, res, next);
                }
                else {
                    next();
                }
            }
            else {
                next();
            }
        }
    ];
}
function methodValid(func) {
    let valid = false;
    if (typeof func === "object") {
        methods.forEach((method) => {
            if (typeof func[method] === "function") {
                valid = true;
            }
            else if (Array.isArray(func[method])) {
                func[method].forEach((subMethod) => {
                    if (typeof subMethod === "function") {
                        valid = true;
                    }
                    else if (Array.isArray(subMethod)) {
                        subMethod.forEach((handlerMethod) => {
                            if (typeof handlerMethod === "function") {
                                valid = true;
                            }
                        });
                    }
                });
            }
        });
    }
    return valid;
}
exports.default = routePath;
//# sourceMappingURL=RoutePath.js.map