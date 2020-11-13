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

declare class Method {
    static get(params: MethodParams): MethodFunction;
    static post(params: MethodParams): MethodFunction;
    static patch(params: MethodParams): MethodFunction;
    static put(params: MethodParams): MethodFunction;
    static head(params: MethodParams): MethodFunction;
    static delete(params: MethodParams): MethodFunction;
    static options(params: MethodParams): MethodFunction;
    static connect(params: MethodParams): MethodFunction;
    static trace(params: MethodParams): MethodFunction;
    static purge(params: MethodParams): MethodFunction;
}

export default Method;