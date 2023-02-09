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

        if (handlers === null) {
            handlers = new Set();
            this.#listenersMap.set(event, handlers);
        }

        return handlers;
    }
}

const ee = new EventEmitter();

ee.once('foo', console.log); // Сработает только один раз
ee.on('foo', (val) => console.log(val)); // Сработает пока не отключить

ee.emit('foo', 1);
ee.emit('foo', 2);

ee.off('foo', console.log); // Отмена конкретного обработчика события по ссылке
ee.off('foo');              // Отмена всех обработчиков этого события