import { CSSProperties } from "aphrodite";
import View, {DEFAULT_VIEW_STYLE} from "./View";

class Column extends View {
    protected defaultStyle: CSSProperties = {
        ...DEFAULT_VIEW_STYLE,
        flexDirection: 'column',
    }
}

export default Column;