Array.prototype.myShift = function(){
    if( this.length === 0){
        return undefined;
    }

    let first = this[0];
    for(let i = 0; i < this.length - 1; i++){
        this[i] = this[i+1];
    }
    this.length--;

    return first;
}


let arr = [1, 2, 3, 4, 5, 6];
let arr1 = [];
arr.myShift();
console.log(arr);
console.log(arr1.myShift());