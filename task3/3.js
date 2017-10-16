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

function NumberOver(number){
    List = new SinglList();
    var ost=0;

    while (number >= 1){
        ost = number%10;
        number=Math.floor(number/10);
        List.add(ost);
    }
    return List;
}

function Summa(number1,number2){
    List3 = new SinglList();
    List1 = NumberOver(number1);
    List2 = NumberOver(number2);

    var i = 0;
    var counter = 0;
    var current1 = List1.head;
    var current2 = List2.head;

    while (current1 != null || current2 != null) {
        if (current1 != null && current2 != null) {
            if (current1.data + current2.data + i > 9) {
                List3.add((current1.data + current2.data + i)%10);
                i = 1;
            } else {
                List3.add(current1.data + current2.data + i);
                i = 0;
            }
            current1 = current1.next;
            current2 = current2.next;
        } else if (current1 == null) {
            if (current2.data + i > 9) {
                List3.add((current2.data + i)%10);
                i = 1;
            } else {
                List3.add(current2.data + i);
                i = 0;
            }
            current2 = current2.next;
        } else if (current2 == null) {
            if (current1.data + i > 9) {
                List3.add((current1.data + i)%10);
                i = 1;
            } else {
                List3.add(current1.data + i);
                i = 0;
            }
            current1 = current1.next;
        }
    }
    if (i) List3.add(1);
    return List3;
}

var list = Summa(465, 342);
console.log(list.head);