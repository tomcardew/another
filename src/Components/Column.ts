import View, { DEFAULT_VIEW_STYLE, Style } from "./View";

// Column-specific default style, extending the base View style
class Column extends View {
    protected defaultStyle: Style = {
        ...DEFAULT_VIEW_STYLE,  // Inherit default styles from the base View class
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
}

export default Column;