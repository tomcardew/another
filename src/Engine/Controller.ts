import View from "../Components/View";

// Controller class responsible for handling events, routing, and more
class Controller {
    
    // The view associated with the controller
    protected view: View = new View();

    /**
     * Render the controller and return the rendered view as an HTMLElement.
     * @returns {HTMLElement} - The rendered view.
     */
    render(): HTMLElement {
        return this.view.render();
    }
}

export default Controller;