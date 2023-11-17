import ArrayUtils from "../../Engine/Utils/Array";
import View from "../View";

const ViewUtils = {
    topMost: (views: View[]) => {
        const elements = [];

        // populate list with view and parent
        views.forEach((view: View) => {
            elements.push({
                view: view.id,
                parent: view.parent?.id
            })
        });

        // eliminate views whos parents are also in the list
        let topMost = [];
        elements.forEach(item => {
            if (item.parent && ArrayUtils.includes(elements, item, (a, b) => a.view === b.parent)) {
                return;
            }
            topMost.push(item);
        })

        // remove repeated items
        topMost = ArrayUtils.unique(topMost, (a, b) => a.view === b.view);
        
        return topMost;
    }
}

export default ViewUtils;