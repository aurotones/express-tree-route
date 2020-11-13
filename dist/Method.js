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
Method.head = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        head: actions
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
Method.options = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        options: actions
    };
};
Method.connect = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        connect: actions
    };
};
Method.trace = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        trace: actions
    };
};
Method.purge = (params) => {
    let actions = [params.action];
    if (params.handlers) {
        actions.unshift(params.handlers);
    }
    return {
        purge: actions
    };
};
