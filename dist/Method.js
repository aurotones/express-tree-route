"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Method {
}
exports.default = Method;
Method.get = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        get: actions
    };
};
Method.post = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        post: actions
    };
};
Method.patch = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        patch: actions
    };
};
Method.put = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        put: actions
    };
};
Method.delete = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        delete: actions
    };
};
//# sourceMappingURL=Method.js.map