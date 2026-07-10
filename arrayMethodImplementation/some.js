Array.prototype.mySome = function(callback, thisArg){
    for(let i = 0 ; i < this.length; ++i){
        if(callback.call(thisArg, this[i], i, this)){
            return true;
        }
    }
    return false;
}

let arr = [1, 3, 5, 8, 10];
let res = arr.mySome(x => x % 2 === 0);
console.log(res);