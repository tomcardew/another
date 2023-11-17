import View, { Style } from "./View";

class Image extends View {

    protected elementBaseName: string = "img";
    protected defaultStyle: Style = {};

    private source: string;
    private alt: string;

    constructor(source: string, alt: string) {
        super();
        this.source = source;
        this.alt = alt;
    }

    render(): HTMLElement {
        const element = super.render() as HTMLImageElement;
        element.src = this.source;
        element.alt = this.alt;
        return element;
    }

}

export default Image;