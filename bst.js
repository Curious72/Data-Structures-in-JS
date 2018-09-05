var node = function(key){
  this.key = key;
  this.left = null;
  this.right = null;
};


var bst = function(root){
  this.root = root;

  this.insertKey = function(key)
  {
    var currentNode = this.root;
    while(currentNode)
    {
      if(key > currentNode.key)
      {
        if(currentNode.right)
          currentNode = currentNode.right;
        else{
          currentNode.right = new node(key);
          break;
        }
      }
      else{
        if(currentNode.left)
          currentNode = currentNode.left;
        else{
          currentNode.left = new node(key);
          break;
        }
      }
    }
  };
  
  this.printBst = function(){
  
  console.log(this);
  
  };
  
};
