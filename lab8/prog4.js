
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }
  

  function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  

  LinkedList.prototype.add = function (value) {
    var newNode = new LinkedListNode(value);
  
    if (this.head === null) {
     
      this.head = newNode;
      this.tail = newNode;
    } else {
     
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };
  
  
  LinkedList.prototype.remove = function (value) {
    if (this.head === null) {
     
      return;
    }
  
    if (this.head.value === value) {
      
      this.head = this.head.next;
  
      if (this.head === null) {
       
        this.tail = null;
      }
  
      return;
    }
  
    var currentNode = this.head;
    var previousNode = null;
  
    while (currentNode !== null) {
      if (currentNode.value === value) {
       
        previousNode.next = currentNode.next;
  
        if (currentNode === this.tail) {
         
          this.tail = previousNode;
        }
  
        return;
      }
  
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  };
  
  
  LinkedList.prototype.print = function () {
    var currentNode = this.head;
    var values = [];
  
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
  
    console.log("LinkedList{" + values.join(",") + "}");
  };
  
 
  var linkedlist = new LinkedList();
  linkedlist.add(1);
  linkedlist.add(2);
  linkedlist.add(3);
  linkedlist.print(); 
  linkedlist.remove(2);
  linkedlist.print(); 