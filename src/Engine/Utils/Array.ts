const ArrayUtils = {
    first: function<T>(array: Array<T>) {
        return array.length > 0 ? array[0] : undefined;
    }
}

export default ArrayUtils;