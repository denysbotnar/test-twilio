const trimExtraWhitespace = (data) => {
    return Object.fromEntries(Object.entries(data).map(([key, value]) => {
        if (typeof value === 'string') {
            return [key, value.replace(/\s+/g, ' ').trim()];
        }

        return [key, value];
    }));
};

export default trimExtraWhitespace;