export interface IPaginationContext<T> {
    $implicit: T[];
    appPaginationOf: T[];
    pageIndexes: number[];
    index: number;
    selectIndex: (index: number) => void;
    next: () => void;
    back: () => void;
}
