// utils/debounce.js
type DebouncedFunction = (...args: any[]) => void;

export const debounce = (
    func: DebouncedFunction,
    delay: number
): DebouncedFunction => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
