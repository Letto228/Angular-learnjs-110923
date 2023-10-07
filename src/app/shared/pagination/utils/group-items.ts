export function groupItems<T>(
    items: T[],
    amountElementsPerPage: number,
): Array<{page: number; elements: T[]}> {
    const result: Array<{page: number; elements: T[]}> = [];

    for (let i = 0; i < items.length; i += amountElementsPerPage) {
        const group = items.slice(i, i + amountElementsPerPage);

        result.push({page: i / amountElementsPerPage, elements: group});
    }

    return result;
}
