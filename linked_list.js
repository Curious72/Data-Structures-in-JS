var node = function(value){
  this.value = value;
  this.next = null;
};


var list = function(head) {
  
  this.head = new node(head);

  this.insert = function(key){
  node_obj = new node(key);
  node_obj.next = this.head;
  this.head = node_obj;
  };
  
  this.printList = function(){
  
  var current_node = this.head;
  while(current_node){
  
  console.log(current_node.value);
  current_node = current_node.next;
  }
  };

};
