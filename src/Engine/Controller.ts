import View from "../Components/View";

// The controller will handle events, routing and more

class Controller {
    protected view: View = new View();

    render(): HTMLElement {
        return this.view.render();
    }
}

export default Controller;