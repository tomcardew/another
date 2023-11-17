import View, { Style } from "./View";

// Text class represents a text element, extending the base View class
class Text extends View {
    protected elementBaseName: string = "p";
    protected defaultStyle: Style = {};

    // Text content to display
    private string: string;

    // Font size for the text
    private fontSize: string | number;

    /**
     * Create a Text instance with the specified text content, font size, and color.
     * @param {string} string - The text content to display.
     * @param {string | number} fontSize - The font size of the text (default: 16).
     * @param {string} color - The color of the text (default: "black").
     */
    constructor(string: string, fontSize: string | number = 16, color: string = "black") {
        super(); // Call the constructor of the base class
        this.string = string;
        this.fontSize = fontSize;

        // Define the default style for the Text class
        this.defaultStyle = {
            fontSize: this.fontSize,
            color
        };
    }

    /**
     * Render the Text element and return it as an HTMLElement.
     * @returns {HTMLElement} - The rendered text element.
     */
    render(): HTMLElement {
        const element = super.render(); // Call the render method of the base class
        element.textContent = this.string; // Set the text content
        return element;
    }
    
    /**
     * Sets the text content.
     * @param {string} string - The new text content to set.
     */
    setText(string: string) {
        this.string = string;
        this.setNeedsRender()
    }
}

export default Text;