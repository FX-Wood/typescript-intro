type ListNode<T> = LinkedListNode<T> | null

// why is this T
class LinkedListNode<T> {
    constructor(public data: T, public next: ListNode<T>) {
    }
}


class LinkedList<T> {
    constructor(private head: ListNode<T> = null, private tail: ListNode<T> = null) {

    }
    // start at head
    // if 
    add(data: T): void {
        let node = new LinkedListNode<T>(data)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.tail;
            current.next = node
        }
        this.tail = node
        this.length++
    }

    insert<T>(index: number, data: T): void {
        if (index >= this.length) {
            this.add(data)
        } else {
            let node = new LinkedListNode<T>(data)
            let current = this.head
            let currentIndex = 0
            while (currentIndex < index - 1) {
                current = current.next
                currentIndex++
            }
            node.next = current.next
            current.next = node
            this.length++
        }
    }

    delete(index: number): {
        
    }
}