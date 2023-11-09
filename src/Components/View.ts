import { css, CSSProperties, StyleDeclarationMap, StyleSheet } from "aphrodite";

// Default styles for the View class
const DEFAULT_VIEW_STYLE: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
};

class View {

    // Base HTML element name for the view
    protected elementBaseName: string = "div";

    // Array to store child views
    private children: View[];

    // Default style for the View class
    protected defaultStyle: CSSProperties | StyleDeclarationMap = DEFAULT_VIEW_STYLE;

    // Custom style for the View class
    private customStyle: CSSProperties | StyleDeclarationMap = {};

    /**
     * Creates a new View instance with optional child views.
     * @param {...View} views - Child views to add to this View.
     */
    constructor(...views: View[]) {
        this.children = views;
    }

    /**
     * Add one or more child views to this View.
     * @param {...View} views - Child views to add.
     */
    child(...views: View[]) {
        this.children = this.children.concat(views);
    }

    /**
     * Render the View as an HTML element.
     * @returns {HTMLElement} - The rendered HTML element.
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

    /**
     * Set custom styles for the View.
     * @param {CSSProperties | StyleDeclarationMap} style - Custom styles to apply.
     */
    style(style: CSSProperties | StyleDeclarationMap) {
        this.customStyle = style;
    }
}

export default View;
export {DEFAULT_VIEW_STYLE};