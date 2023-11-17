import Controller from "./Controller"
import ArrayUtils from "./Utils/Array";

export type Route = Record<string, Controller>;

// TODO: This component should handle routing

export default class Router {

    private routes: Route[];
    private current: string;

    constructor(...controllers: Controller[]) {
        let _routes = {};
        controllers.forEach(controller => {
            _routes = {
                ..._routes,
                [controller.name]: controller,
            }
        });
    }

    start() {
        
    }

}