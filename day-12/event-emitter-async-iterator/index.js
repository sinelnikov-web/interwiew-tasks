class EventEmitter {
    #listenersMap = new Map();

    on(event, cb) {
        this.#getHandlers(event).add(cb);
    }

    once(event, cb) {
        const wrapper = (...args) => {
            cb()
            this.off(event, wrapper);
        }
        this.on(event, wrapper);
        return () => this.off(event, wrapper);
    }

    off(event, cb) {
        this.#getHandlers(event).delete(cb);
    }

    emit(event, ...args) {
        this.#getHandlers(event).forEach((handler) => {
            handler(...args);
        })
    }

    #getHandlers(event) {
        let handlers = this.#listenersMap.get(event);

        if (handlers == null) {
            handlers = new Set();
            this.#listenersMap.set(event, handlers);
        }

        return handlers;
    }
}

function stream(ee, event) {
    const resolvers = new Set();
    const queue = [];

    ee.on(event, handler)
    return {
        [Symbol.asyncIterator]() {
            return this;
        },
        next() {
            return new Promise((resolve) => {
                if (queue.length > 0) {
                    resolve({
                        done: false,
                        value: queue.shift()
                    })
                } else {
                    resolvers.add((value) => resolve({
                        done: false,
                        value
                    }));
                }
            })
        },
        return() {
            ee.off(event, handler);

            return Promise.resolve({
                done: true,
                value: undefined
            })
        }
    }

    function handler(e) {
        console.log(resolvers)
        if (resolvers.size > 0) {
            try {
                resolvers.forEach((resolve) => resolve(e))
            } finally {
                resolvers.clear();
            }
        } else {
            queue.push(e);
        }
    }
}

const ee = new EventEmitter();

(async () => {
    for await (const e of stream(ee, 'foo')) {
        console.log(e); // 1 2 3
    }
})();

ee.emit('foo', 1);
ee.emit('foo', 2);
ee.emit('foo', 3);
