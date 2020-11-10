interface MethodFunction {
    get?: (any[] | any)[],
    post?: (any[] | any)[],
    patch?: (any[] | any)[],
    put?: (any[] | any)[],
    delete?: (any[] | any)[],
}

export default class Method {
    public static get = (handlers, fn?): MethodFunction => {
        return {
            get: [
                handlers,
                fn
            ]
        }
    };
    public static post = (handlers, fn?): MethodFunction => {
        return {
            post: [
                handlers,
                fn
            ]
        }
    };
    public static patch = (handlers, fn?): MethodFunction => {
        return {
            patch: [
                handlers,
                fn
            ]
        }
    };
    public static put = (handlers, fn?): MethodFunction => {
        return {
            put: [
                handlers,
                fn
            ]
        }
    };
    public static delete = (handlers, fn?): MethodFunction => {
        return {
            delete: [
                handlers,
                fn
            ]
        }
    };
}