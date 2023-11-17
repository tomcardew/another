import View, { Style } from "./View";

class Button extends View {
    protected elementBaseName: string = "button";
    protected defaultStyle: Style = {
        appearance: 'none'
    };

    private label: string;

    constructor(label: string) {
        super();
        this.label = label;
    }

    set onClick(listener: EventListener) {
        this.setEvent({ name: 'click', listener });
    }

    render(): HTMLElement {
        const element = super.render();
        element.innerText = this.label;
        return element;
    }
}

export default Button;