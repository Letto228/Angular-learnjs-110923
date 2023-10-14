export interface IPaginationContext<T> {
    $implicit: T[];
    appPaginationOf: T[];
    currentPage: number;
    arrayPages: number[];
    next: () => void;
    back: () => void;
    selectedPage: (index: number) => void;
}
