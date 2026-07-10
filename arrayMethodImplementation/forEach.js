Array.prototype.myForEach = function(callback, thisArg){
    for( let i = 0; i <  this.length; i++){
        callback.call(thisArg, this[i], i, this);
    }
}

let arr = [1, 2, 3, 45, 6];

arr.myForEach((value, index) => {
    console.log(index, value);
});

let arr1 = [10, 20, 30];
let obj = {multiplier: 2 };

arr1.forEach(function (value, index) {
    console.log(value * this.multiplier);
}, obj);