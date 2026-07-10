Array.prototype.myFind = function(callback, thisArg){
    for( let i = 0 ; i < this.length; i++){
        if(callback.call(thisArg, this[i], i, this)){
            return this[i];
        }
    }
    return underfined;
}

let arr = [1, 3, 5, 8, 10];
let result = arr.find(x => x % 2 === 0)
console.log(result);

let arr1 = [1, 2 ,9 ,4, 7, 5 ];
let obj = { min : 4};
console.log(arr1.myFind(function(num){
    return num > this.min;
}, obj))