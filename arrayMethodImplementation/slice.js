Array.prototype.mySlice = function(start = 0, end = this.length) {
    let result = [];
    let length = this.length;

    if(start < 0){
        start = Math.max(length + start, 0);
    }else{
        start = Math.min(start, length);
    }

    if(end < 0) {
        end = Math.max(length + end, 0);
    }else{
        end = Math.min(end, length);
    }

    for(let i = start; i < end; i++){
        result[result.length] = this[i];
    }

    return result;
};



let arr = [25, 4, 7 , 382, 6];
console.log(arr.slice(1,4));