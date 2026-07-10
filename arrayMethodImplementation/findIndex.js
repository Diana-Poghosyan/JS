Array.prototype.myFindIndex = function(callback, thisArg){
    for( let i = 0; i < this.length; ++i){
        if(callback.call(thisArg, this[i], i, this)){
            return i;
        }
    }
    return -1;
}

let arr = [ 1, 5 , 4 , 5 ,7, 8];
let res = arr.myFindIndex( (x) => x % 2 === 0);
console.log(res);

let arr1 = [1, 5, 3, 6, 7];
let obj = {
    y: 5 
};
let res1 = arr1.myFindIndex(function(x) {
    return x > this.y} , obj);
console.log(res1);
