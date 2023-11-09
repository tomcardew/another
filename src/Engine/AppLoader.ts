import Controller from "./Controller";

// AppLoader class responsible for managing and running controllers
class AppLoader {
    // Array to store registered controllers
    private controllers: Controller[] = [];
    
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
        // Append the rendered view of the first registered controller to the specified container
        container.appendChild(this.controllers[0].render());
    }
}

export default AppLoader;