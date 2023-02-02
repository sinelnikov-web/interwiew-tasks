class EventEmitter {
    #listenersMap = new Map();

    on(event, cb) {
        const listeners = this.#listenersMap.get(event) ?? []
        listeners.push({
            link: cb,
            listener(...args) {
                cb.apply(this, args)
            }
        })
        this.#listenersMap.set(event, listeners)
    }

    once(event, cb) {
        const listeners = this.#listenersMap.get(event) ?? []
        listeners.push({
            link: cb,
            listener: (...args) => {
                cb.apply(this, args)
                this.off(event, cb)
            }
        })
        this.#listenersMap.set(event, listeners)
    }

    off(event, cb) {
        const listeners = this.#listenersMap.get(event) ?? []
        const filteredListeners = listeners.filter((listener) => {
            if (cb) {
                return listener.link !== cb
            }
            return false;
        })
        this.#listenersMap.set(event, filteredListeners)
    }

    emit(event, value) {
        const listeners = this.#listenersMap.get(event) ?? [];
        listeners.forEach((listener) => listener.listener(value))
    }
}

const ee = new EventEmitter();

ee.once('foo', console.log); // Сработает только один раз
ee.on('foo', (val) => console.log(val)); // Сработает пока не отключить

ee.emit('foo', 1);
ee.emit('foo', 2);

ee.off('foo', console.log); // Отмена конкретного обработчика события по ссылке
ee.off('foo');              // Отмена всех обработчиков этого события