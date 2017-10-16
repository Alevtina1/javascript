function Node(data){
    this.data = data;
    this.next = null;
}

function SinglList(){
    this._length = 0;
    this.head = null;
}

SinglList.prototype.add = function(value){
    var node = new Node(value);
    currentNode = this.head;

    if (!currentNode){
        this.head = node;
        this._length++;
        return node;
    }

    while (currentNode.next){
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this._length++;
    return node;
}

SinglList.prototype.searchNode = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'does not exist'};

    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};


SinglList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'does not exist'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2.js-ой случай: первый узел удален
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // 3-ий: все прочие узлы удалены
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};

function ListNumber(number){
    var l = number.length;
    var i;
    var currentNumb;
    for (i=0; i<l; i++)
    {
        currentNumb = number[i];
        SinglList.prototype.add(currentNumb);
    }

}

var list = new SinglList();
list.add(3);
list.add(4);
list.add(5);
console.log(list.head);
list.remove(1);
console.log(list.head);
console.log(list.searchNode())