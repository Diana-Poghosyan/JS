Array.prototype.myFilter = function (callback, thisArg) {
    let result = [];

    for (let i = 0; i < this.length; i++){
        if(callback.call(thisArg, this[i], i, this)){
            result[result.length] = this[i];
        }
    }
    return result;
};

let arr = [1, 2, 3, 4, 5];
console.log(arr.myFilter(x => x % 2 === 0));


let arr1 = [1 , 2 , 3, 4 , 5];
let obj = { min: 3};

let result = arr1.myFilter(function (x) {return x > this.min;}, obj);
console.log(result);