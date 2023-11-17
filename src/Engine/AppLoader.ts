import ViewUtils from "../Components/Utils/View";
import View from "../Components/View";
import Controller from "./Controller";
import { eventEmitter } from "./EventEmitter";
import Router from "./Router";

// AppLoader class responsible for managing and running controllers
class AppLoader {
    // Array to store registered controllers
    private controllers: Controller[] = [];
    // private router: ant
    
    /**
     * Register one or more controllers with the AppLoader.
     * @param {...Controller} controllers - Controllers to register.
     */
    register(...controllers: Controller[]) {
        this.controllers = this.controllers.concat(controllers);
    }

    /**
     * Run the application and append the rendered view of the first registered controller to a specified container.
     * @param {HTMLElement} container - The container element where the view should be appended.
     */
    run(container: HTMLElement) {
        new Router(...this.controllers);
        eventEmitter.on("render-controller", (element: HTMLElement) => {
            // TODO: Make sure the controller rendered is the actual controller when routing is enabled
            container.innerHTML = '';
            container.appendChild(element);
        })

        eventEmitter.on("render-view-tree", (views: View[]) => {
            console.log("render-view-tree", views)
            let _views = ViewUtils.topMost(views);
            _views.forEach((view: View) => {
                const node = document.getElementById(view.id);
                if (node && node.parentNode) {
                    console.log('replacing', node, "with", view.render())
                    node.parentNode.replaceChild(view.render(), node);
                }
            })
        })

        // Append the rendered view of the first registered controller to the specified container
        container.appendChild(this.controllers[0].render());
    }
}

export default AppLoader;