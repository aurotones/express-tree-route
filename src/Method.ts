import { Request, Response, NextFunction } from "express";

interface MethodFunction {
    get?: (any[] | any)[],
    post?: (any[] | any)[],
    patch?: (any[] | any)[],
    put?: (any[] | any)[],
    head?: (any[] | any)[],
    delete?: (any[] | any)[],
    options?: (any[] | any)[],
    connect?: (any[] | any)[],
    trace?: (any[] | any)[],
    purge?: (any[] | any)[],
}

interface MethodParams {
    action: (req: Request, res: Response, next?: NextFunction) => Promise<Response<any>>,
    handlers?: any[],
}

export default class Method {
    public static get = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            get: actions
        }
    };
    public static post = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            post: actions
        }
    };
    public static patch = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            patch: actions
        }
    };
    public static put = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            put: actions
        }
    };
    public static head = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            head: actions
        }
    };
    public static delete = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            delete: actions
        }
    };
    public static options = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            options: actions
        }
    };
    public static connect = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            connect: actions
        }
    };
    public static trace = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            trace: actions
        }
    };
    public static purge = (params: MethodParams): MethodFunction => {
        let actions: Array<Function | Function[]> = [ params.action ];
        if (params.handlers){
            actions.unshift(params.handlers);
        }
        return {
            purge: actions
        }
    };
}