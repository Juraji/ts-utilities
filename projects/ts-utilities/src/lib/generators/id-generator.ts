/**
 * Generate numerical ID's (from 0 up).
 * @param max The maximum ID before completing the iterable.
 * @return An Iterator, yielding numerical id's starting at 0 until max is reached.
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
