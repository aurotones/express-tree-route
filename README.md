# express-tree-route (in development)

Tree route for cleaner, short and easy to find solution to Express routing!

Currently in development and code may change in the future!

## Installation
```
npm install @aurotones/express-tree-routing
yarn add @aurotones/express-tree-routing
```

## How to use?

- Create a file named `routes.js` and see the example below to
configure your route.
Name the directory and file name based on what kind of API is it for.
In example it's showing a login and post retrieving API.
```
import { Router } from "express";
import { Routes } from "@aurotones/express-tree-route";

router.use(Routes(__dirname,[
    "/auth/login",
    "/post/get"
]));

export default router;
```
- Make a folder and name it based on what kind of API you wrote above.
For example, directory and files should look like this.

```
..
auth/login.js
post/get.js
post/post.js
routes.js
```
- See below example to configure API method in `login.js`, `get.js`, `post.js` files.

You can declare your method like below.

```
Method.get();
Method.post();
Method.put();
Method.patch();
Method.delete();
Method.head();
Method.option();
Method.connect();
Method.trace();
Method.purge();
```
  
Field `handlers` is optional. Can use any express middleware, handler or custom functions.
Note: You can't use more methods in one file for now. This might change in the future.

```
import { Method } from "@aurotones/express-tree-route";
import { body } from "express-validator";

export default Method.post({
    handlers: [
        body("username").isString(),
        body("password").isString(),
    ],
    action: async (req, res, next) => {
        try {
            // your code handling API method here

        } catch (err){
            console.log(err);
            // API error handling

        }
    }
});
```

## Contributing

Pull requests are welcome.
Also pointing out mistakes are also welcome.