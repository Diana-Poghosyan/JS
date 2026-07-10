Array.prototype.mySplice = function(start, deleteCount, ...items) {
    let removed = [];
    let length = this.length;

    if(start < 0){
        start = Math.max(length + start, 0);
    }else{
        start = Math.min(start, length);
    }

    for(let i = 0; i < deleteCount; i++) {
        removed.push(this[start + i]);
    }

    for(let i = start; i < length - deleteCount; i++){
        this[i] = this[i + deleteCount];
    }

    this.length = length - deleteCount;
    for(let i = 0; i < items.length; i++){
        this[this.length] = items[i];
    }
    return removed;
};

let arr = [1, 2, 3, 4, 5];
let res = arr.mySplice(1, 2, 10, 20);
console.log(res);
console.log(arr);