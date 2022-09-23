export const parseComponents = text => {
    const placeholder = /(\[.*?])/g;

    if (placeholder.test(text)) {
        return text.split(placeholder).map(value => {
            if (/\[\d+ \d+ \([0-9.]+\)\|.*?]/g.test(value)) {
                return {name: 'CopyCoordinates', value};
            } else if (/\[#\d+\|.*?]/g.test(value)) {
                return {name: 'OpenLink', value};
            }

            return {name: 'SimpleText', value};
        });
    }

    return [{name: 'SimpleText', value: text}];
};
