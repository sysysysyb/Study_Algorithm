class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //리스트 끝에 새 노드 추가
  append(data) {
    if (this.isEmpty()) {
      let currentNode = new Node(data);
      this.head = currentNode;
      this.tail = currentNode;
    } else {
      let prevNode = this.head;
      for (let i = 0; i < this.length - 1; i++) {
        prevNode = prevNode.next;
      }
      let currentNode = new Node(data);
      prevNode.next = currentNode;
      currentNode.prev = prevNode;
      this.tail = currentNode;
    }
    this.length++;
  }

  //리스트 맨 앞에 새 노드 추가
  prepend(data) {
    if (this.isEmpty()) {
      let currentNode = new Node(data);
      this.head = currentNode;
      this.tail = currentNode;
    } else {
      let currentNode = new Node(data);
      let nextNode = this.head;
      this.head = currentNode;
      currentNode.next = nextNode;
      nextNode.prev = currentNode;
    }
    this.length++;
  }

  //지정된 위치에 새 노드 삽입 (기존의 노드를 지우면 안된다.)
  insert(index, data) {
    if (index === 0) {
      this.prepend(data);
    } else if (index === this.length - 1) {
      this.append(data);
    } else {
      let prevNode = this.head;
      let nextNode = this.head.next;
      for (let i = 1; i < index; i++) {
        prevNode = prevNode.next;
        nextNode = nextNode.next;
      }
      let currentNode = new Node(data);
      prevNode.next = currentNode;
      currentNode.next = nextNode;
      currentNode.prev = prevNode;
      nextNode.prev = currentNode;
      this.length++;
    }
  }

  //특정 값을 가지는 첫 번째 노드 삭제
  delete(data) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === data) {
        let prevNode = currentNode.prev;
        let nextNode = currentNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  //특정 위치의 노드 삭제
  deleteAt(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= index; i++) {
        currentNode = currentNode.next;
      }
      let prevNode = currentNode.prev;
      let nextNode = currentNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.length--;
  }

  //특정 값을 가지는 노드 탐색 (있으면 true/없으면 false)
  search(data) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === data) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  //특정 값을 가지는 노드의 첫번째 인덱스 반환(없으면 -1 반환)
  indexOf(data) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      // console.log('currentNode : ' + currentNode.data);
      if (currentNode.data === data) {
        return i;
      } else {
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  //리스트가 비어 있는지 확인
  isEmpty() {
    return this.length === 0;
  }

  //현재 연결 리스트에 포함된 노드 수 반환
  size() {
    return this.length;
  }

  //연결 리스트의 모든 노드를 순차적으로 출력
  display() {
    let allNode = '';
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      allNode += `${currentNode.data} <-> `;
      currentNode = currentNode.next;
    }
    allNode += 'null';
    console.log(allNode);
  }
}

export default DoublyLinkedList;
