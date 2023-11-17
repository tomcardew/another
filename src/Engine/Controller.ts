import { isEqual } from "lodash";

import View from "../Components/View";
import { eventEmitter } from "./EventEmitter";
import { Theme } from "./Theme";

// Controller class responsible for handling events, routing, and more
class Controller {
    
    protected _name: string;
    private _state: any;
    protected view: View; // The view associated with the controller

    private updateStack: View[];
    private renderRequested: boolean = false;

    private _theme: Theme;

    set theme(theme: Theme) {
        this._theme = theme;
    }

    constructor() {
        this._name = this.constructor.name;
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

    get name(): string {
        return this._name;
    }

    private addRenderRequest(view: View) {
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