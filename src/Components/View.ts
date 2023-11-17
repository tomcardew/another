import { css, CSSProperties, StyleDeclarationMap, StyleSheet } from "aphrodite";
import { v4 as uuid } from 'uuid';
import { eventEmitter } from "../Engine/EventEmitter";

export type Style = CSSProperties | StyleDeclarationMap;
export type StyleList = Record<string, Style>;

export interface Event {
    name: keyof HTMLElementEventMap;
    listener: EventListener;
}

// Default styles for the View class
const DEFAULT_VIEW_STYLE: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
};

class View {
    // Array to store child views
    private children: View[];

    // Internal view id
    private _id: string;
    
    // Custom style for the View class
    private customStyle: Style = {};

    // Default style for the View class
    protected defaultStyle: Style = DEFAULT_VIEW_STYLE;

    // Base HTML element name for the view
    protected elementBaseName: string = "div";

    protected eventList: Event[];

    parent?: View;

    /**
     * Creates a new View instance with optional child views.
     * @param {...View} views - Child views to add to this View.
     */
    constructor(...views: View[]) {
        this._id = uuid();
        this.eventList = [];
        this.children = [];
        this.child(...views);
    }

    get id() {
        return this._id.substring(0, 6);
    }

    /**
     * Add one or more child views to this View.
     * @param {...View} views - Child views to add.
     */
    child(...views: View[]) {
        const _views = views.map(view => {
            view.parent = this;
            return view;
        })
        this.children = this.children.concat(_views);
        this.setNeedsRender();
    }

    replaceChildrenWith(...views: View[]) {
        const _views = views.map(view => {
            view.parent = this;
            return view;
        })
        this.children = _views;
        this.setNeedsRender();
    }

    hasChild(view: View) {
        return this.children.find((_view: View) => _view.id === view.id) !== undefined;
    }

    removeAllChildren() {
        this.children = [];
    }

    protected setNeedsRender() {
        eventEmitter.emit('render-view', this);
    }

    /**
     * Render the View as an HTML element.
     * @returns {HTMLElement} - The rendered HTML element.
     */
    render(): HTMLElement {
        const element = document.createElement(this.elementBaseName);
        element.id = this.id;
        
        const style = StyleSheet.create({ [`default_${this.constructor.name}`]: this.defaultStyle, [this.constructor.name]: this.customStyle })
        element.className = css(style[`default_${this.constructor.name}`], style[this.constructor.name]);
        
        this.eventList.forEach((event) => {
            element.addEventListener(event.name, event.listener);
        });

        this.children.forEach((view: View) => {
            element.appendChild(view.render());
        });

        return element;
    }

    /**
     * Set custom styles for the View.
     * @param {Style} style - Custom styles to apply.
     */
    setStyle(style: Style) {
        this.customStyle = style;
    }

    /**
     * Set custom styles for the View.
     * @param {Style} style - Custom styles to apply.
     */
    updateStyle(style: Style) {
        const updatedStyle = { ...this.customStyle, ...style } as Style;
        this.customStyle = updatedStyle;
    }

    protected setEvent(event: Event) {
        this.eventList.push(event);
    }
}

export default View;
export {DEFAULT_VIEW_STYLE};