/**
 * Generate numerical ID's (from 0 up)
 * @param max The maximum ID before completing the iterable
 */
export function* idGenerator(max: number = Infinity): IterableIterator<number> {
    if (max >= 0) {
        let id = 0;
        while (id <= max) {
            yield id;
            id++;
        }
    }
}
