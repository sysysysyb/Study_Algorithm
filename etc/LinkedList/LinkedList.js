class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //리스트 끝에 새 노드 추가
  append(data) {
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  //리스트 맨 앞에 새 노드 추가
  prepend(data) {
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      let secondNode = this.head;
      this.head = new Node(data);
      this.head.next = secondNode;
    }
    this.length++;
  }

  //지정된 위치에 새 노드 삽입 (기존의 노드를 지우면 안된다.)
  insert(index, data) {
    if (index === 0) {
      this.prepend(data);
    } else {
      let prevNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }
      let nextNode = prevNode.next;
      let newNode = new Node(data);
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
  }

  //특정 값을 가지는 첫 번째 노드 삭제
  delete(data) {
    let currentNode = this.head;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    this.length--;
  }

  //특정 위치의 노드 삭제
  deleteAt(index) {
    let currentNode = this.head;
    let prevNode = null;
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next;
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
      allNode += `${currentNode.data} -> `;
      currentNode = currentNode.next;
    }
    allNode += 'null';
    console.log(allNode);
  }
}

export default LinkedList;
