class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    add(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        let result = ""
        while (current !== null) {
            // console.log(current.data)
            result = result + current.data + "-->";
            current = current.next;
        }
        result += null;
        console.log(result);
    }

    remove(data) {
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (current.data === data) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log("The size of linked list is ", list.getSize());
console.log("Items in Linked List");
list.print();
console.log("After removing the element");
list.remove(20);
list.print();