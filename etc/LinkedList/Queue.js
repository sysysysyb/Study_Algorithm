class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //비어 있는 메소드 안을 채워 주세요!

  //요소 새로 추가
  enqueue(element) {
    if (this.length === 0) {
      this.head = new Node(element);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(element);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  //요소 제일 앞에서 제거 후 가져오기(빈 큐면 null 반환)
  dequeue() {
    if (this.length === 0) {
      return null;
    } else {
      let removedQueue = this.head;
      this.head = this.head.next;
      this.length--;
      return removedQueue.data;
    }
  }

  //사이즈
  size() {
    return this.length;
  }

  //제일 앞의 값 확인, front()로 정의하기도 함 (빈 큐면 null 반환)
  peek() {
    if (this.length === 0) {
      return null;
    } else {
      return this.head.data;
    }
  }

  //비어있는지 확인
  isEmpty() {
    return this.length === 0;
  }
}

export default Queue;
