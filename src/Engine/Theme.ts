// TODO: This component should handle basic theming

import { CSSPropertiesComplete } from "aphrodite";

interface ThemeSchema {
    colors: ThemeSchemaColors;
    fontSizes: ThemeSchemaFontSizes;
}

interface ThemeSchemaColors {
    primary: CSSPropertiesComplete["color"];
    secondary: CSSPropertiesComplete["color"];
    accent: CSSPropertiesComplete["color"];
    text: CSSPropertiesComplete["color"];
    background: CSSPropertiesComplete["color"];
}

interface ThemeSchemaFontSizes {
    heading1: CSSPropertiesComplete["fontSize"];
    heading2: CSSPropertiesComplete["fontSize"];
    body: CSSPropertiesComplete["fontSize"];
    caption: CSSPropertiesComplete["fontSize"];
}

class Theme {
    private theme: ThemeSchema;
    constructor(theme: ThemeSchema) {
        this.theme = theme;
    }
    get colors() {
        return this.theme.colors;
    }
    get fontSizes() {
        return this.theme.fontSizes;
    }
}

const DEFAULT_THEME: ThemeSchema = {
    colors: {
        primary: '#000',
        secondary: '#000',
        accent: '#000',
        text: '#000',
        background: '#fff'
    },
    fontSizes: {
        heading1: '4.5rem',
        heading2: '3.5rem',
        body: '1rem',
        caption: '0.75rem'
    }
}

export { Theme, ThemeSchema, DEFAULT_THEME }