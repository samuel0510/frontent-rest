import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import { Error404 } from "../Pages";
import { BasicLayout } from "../layouts";

const routes = [
    ...routerAdmin,
    ...routerClient,
    {
        path: "*",
        layout: BasicLayout,
        component: Error404,
    },
];


export default routes;

