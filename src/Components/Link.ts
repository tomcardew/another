import { CSSProperties, StyleDeclarationMap } from "aphrodite";
import View from "./View";

class Link extends View {
    protected elementBaseName: string = "a";
    protected defaultStyle: CSSProperties | StyleDeclarationMap = {};

    private url: string;
    private label: string;
    private _target: string = '_self';

    // Setter for the target attribute
    set target(target: string) {
        this._target = target;
    }

    /**
     * Create a Link instance with the specified url and label to display.
     * @param {string} url - URL Path.
     * @param {string} label - Label to display.
     */
    constructor(url: string, label: string) {
        super();
        this.url = url;
        this.label = label;
    }
    
    render(): HTMLElement {
        const element = super.render() as HTMLLinkElement; // Call the render method of the base class
        element.href = this.url;
        element.target = this._target;
        element.textContent = this.label;
        return element;
    }
}

export default Link;