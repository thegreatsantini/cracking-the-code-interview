function LinkedList ( ) {
  this.head = null;
};

LinkedList.prototype.push = function (val) {
  var node = {
    value: val,
    next: null
  }
  if ( !this.head ) {
    this.head = node;
  }
  else {
    current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

var myFirstsll = new LinkedList();

myFirstsll.push('much');
myFirstsll.push('science');
myFirstsll.push('wow');

console.log(myFirstsll.head);
console.log(myFirstsll.head.next);
console.log(myFirstsll.tail);
