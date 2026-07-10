Array.prototype.myPop = function(){
    if( this.length === 0){
        return undefined;
    }

    let last = this[this.length - 1];
    this.length--;

    return last;
}

let arr = [1, 2, 3, 4, 5, 6];
arr.myPop();
console.log(arr);
let arr1 = [];
console.log(arr1.myPop());