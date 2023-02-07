class LRUCache {
    #cacheMap = new Map<string, unknown>();
    size: number;
    constructor(size: number) {
        this.size = size;
    }
    set(key: string, value: unknown): void {
        if (this.#cacheMap.size === this.size) {
            const {value: key} = this.#cacheMap.keys().next();
            this.#cacheMap.delete(key);
        }
        this.#cacheMap.set(key, value);
    }

    get(key: string): unknown | undefined {
        if (!this.#cacheMap.has(key)) {
            return;
        }
        const element = this.#cacheMap.get(key);
        this.#cacheMap.delete(key);
        this.set(key, element);
        return element;
    }

    has(key: string): boolean {
        if (!this.#cacheMap.has(key)) {
            return false;
        }
        const element = this.#cacheMap.get(key);
        this.#cacheMap.delete(key);
        this.set(key, element);
        return true;
    }
}

const cache = new LRUCache(3); // Размер кеша

cache.set('key1', 1);
cache.set('key2', 2);
cache.set('key3', 3);

console.log(cache.get('key1')); // 1

cache.set('key4', 4);

console.log(cache.has('key2')); // false
