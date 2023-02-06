class LinkedListNode {
    value;
    next;
    prev;
    constructor(value, {prev, next}) {
        this.value = value;
        this.next = next;
        this.prev = prev;

        if (prev != null) {
            this.prev = prev;
            prev.next = this;
        }
        if (next != null) {
            this.next = next;
            next.prev = this;
        }
    }
}

class LinkedList {
    first = null;
    last = null;

    pushLeft(value) {
        this.first = new LinkedListNode(value, {next: this.first})

        if (this.last == null) {
            this.last = this.first;
        }
    }

    popLeft() {
        const poppedNode = this.first;
        if (poppedNode == null) {
            return;
        }
        this.first = poppedNode.next;

        if (this.first) {
            this.first.prev = null;
        } else {
            this.last = null;
        }

        return poppedNode.value;
    }
    pushRight(value) {
        this.last = new LinkedListNode(value, {prev: this.last})

        if (this.first == null) {
            this.first = this.last;
        }
    }

    popRight() {
        const poppedNode = this.last;
        if (poppedNode == null) {
            return;
        }
        this.last = poppedNode.prev;

        if (this.last) {
            this.last.next = null;
        } else {
            this.first = null;
        }

        return poppedNode.value;
    }
}

class Queue {
    #store = new LinkedList();

    push(value) {
        this.#store.pushRight(value);
    }

    pop() {
        return this.#store.popLeft();
    }
}


const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
console.log(queue.pop()); // 3
console.log(queue.pop()); // undefined
