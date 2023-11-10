import { isEqual } from "lodash";

import View from "../Components/View";
import { eventEmitter } from "./EventEmitter";

// Controller class responsible for handling events, routing, and more
class Controller {
    
    // The view associated with the controller
    protected view: View;
    protected _state: any;

    private updateStack: View[];
    private renderRequested: boolean = false;

    constructor() {
        this.updateStack = [];
        this.view = new View();
        eventEmitter.on('render-view', (view: View) => this.addRenderRequest(view));
    }

    get state(): any {
        return this._state;
    }

    set state(state: any) {
        if(!isEqual(state, this._state)) {
            this._state = state;
            this.view.removeAllChildren();
            eventEmitter.emit("render-controller", this.render());
        }
    }

    addRenderRequest(view: View) {
        console.log("adding render request", view);
        this.updateStack.push(view);
        if (!this.renderRequested) {
            this.renderRequested = true;
            requestAnimationFrame(() => {
                eventEmitter.emit('render-view-tree', this.updateStack);
                this.renderRequested = false;
                this.updateStack = [];
            })
        }
    }

    /**
     * Render the controller and return the rendered view as an HTMLElement.
     * @returns {HTMLElement} - The rendered view.
     */
    render(): HTMLElement {
        return this.view.render();
    }
}

export default Controller;