import Controller from "./Controller";

class AppLoader {
    private controllers: Controller[] = [];
    
    register(...controllers: Controller[]) {
        this.controllers = this.controllers.concat(controllers);
    }

    run(container: HTMLElement) {
        container.appendChild(this.controllers[0].render());
    }
}

export default AppLoader;