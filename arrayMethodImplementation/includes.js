Array.prototype.myIncludes = function(searchElement, fromIndex = 0){
    let size = this.length;
    fromIndex = Math.trunc(fromIndex);
    
    if(fromIndex >= size) return false;

    if( fromIndex < 0){
        fromIndex = Math.max(fromIndex + size, 0);
    }

    for(let i = fromIndex; i< size; ++i){
        if( i in this){
            let value = this[i];
            if(value === searchElement){
                return true;
            }
        }
    }

    return false;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.myIncludes(3));
console.log(arr.myIncludes(10));
console.log(arr.myIncludes(2, 2));