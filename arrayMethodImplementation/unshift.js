Array.prototype.myUnshift = function (...items) {
    let count = items.length;

    for (let i = this.length - 1; i >=0; i--) {
        this[i + count] = this[i];
    }
    for (let i = 0 ; i < count; i++){
        this[i] = items[i];
    }

    return this.length;
};

let arr = [3, 4];
arr.myUnshift(1, 2);
console.log(arr); 