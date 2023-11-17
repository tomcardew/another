const ArrayUtils = {
    first: function<T>(array: Array<T>) {
        return array.length > 0 ? array[0] : undefined;
    },
    unique: function<T>(array: Array<T>, predicate: (a: T, b: T) => boolean) {
        let uniqueList = [];
        for (var i in array) {
            const item = array[i];
            if (!ArrayUtils.includes(uniqueList, item, predicate)) {
                uniqueList.push(item);
            }
        }
        return uniqueList;
    },
    includes: function<T>(array: Array<T>, item: T, predicate: (a: T, b: T) => boolean) {
        for (var i in array) {
            const elem = array[i];
            if (predicate(item, elem)) {
                return true;
            }
        }
        return false;
    }
}

export default ArrayUtils;