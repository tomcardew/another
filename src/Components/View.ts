import { css, CSSProperties, StyleDeclarationMap, StyleSheet } from "aphrodite";

const DEFAULT_VIEW_STYLE: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
};

/**
 * The `View` class represents a basic view element in a web application.
 * It handles both layout and styling.
 */
class View {
    /**
     * The base HTML element type used for this view.
     * By default, it is a "div" element.
     */
    protected elementBaseName: string = "div";

    /**
     * An array of child views contained within this view.
     */
    private children: View[];

    protected defaultStyle: CSSProperties | StyleDeclarationMap = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
    private customStyle: CSSProperties | StyleDeclarationMap = {};

    /**
     * Creates a new `View` instance.
     *
     * @param {...View} views - One or more `View` instances to be added as children of this view.
     */
    constructor(...views: View[]) {
        this.children = views;
    }

    /**
     * Adds one or more child views to this view.
     *
     * @param {...View} views - One or more `View` instances to be added as children.
     */
    child(...views: View[]) {
        this.children = this.children.concat(views);
    }

    /**
     * Renders the current `View` and its child views as an `HTMLElement`.
     *
     * @returns {HTMLElement} An `HTMLElement` representing the rendered view.
     */
    render(): HTMLElement {
        const element = document.createElement(this.elementBaseName);
        
        const style = StyleSheet.create({ [`default_${this.constructor.name}`]: this.defaultStyle, [this.constructor.name]: this.customStyle })
        element.className = css(style[`default_${this.constructor.name}`], style[this.constructor.name]);
        
        this.children.forEach((view: View) => {
            element.appendChild(view.render());
        });

        return element;
    }

    style(style: CSSProperties | StyleDeclarationMap) {
        this.customStyle = style;
    }
}

export default View;
export {DEFAULT_VIEW_STYLE};