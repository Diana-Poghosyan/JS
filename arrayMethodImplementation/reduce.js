Array.prototype.myReduce = function(callback, initialValue ){
    let accumulator = initialValue;
    let start  =  0;

    if( accumulator == undefined){
        accumulator = this[0];
        start = 1;
    }

    for( let i = start; i < this.length; ++i){
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.myReduce((a,b)=>a+b,0));