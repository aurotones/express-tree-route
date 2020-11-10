import { Request, Response, NextFunction } from "express";

interface MethodFunction {
    get?: (any[] | any)[],
    post?: (any[] | any)[],
    patch?: (any[] | any)[],
    put?: (any[] | any)[],
    delete?: (any[] | any)[],
}

interface MethodParams {
    action: (req: Request, res: Response, next?: NextFunction) => Promise<Response<any>>,
    handlers?: any[],
}

declare namespace Method {
    function get(params: MethodParams): MethodFunction;
    function post(params: MethodParams): MethodFunction;
    function patch(params: MethodParams): MethodFunction;
    function put(params: MethodParams): MethodFunction;
    // function delete(params: MethodParams): MethodFunction;
}

export default Method;