import { ClientLayout } from "../layouts";
import { Error404 } from "../Pages";
import { Home } from "../Pages/Client";
 

const routesClient =[
    {
        path: "/",
        layout: ClientLayout,
        component: Home,
    },
    {
        layout: ClientLayout,
        component: Error404,
    },
];

export default routesClient;