// if false return true, if true return false
function foo(k){
    if(!k){
        return true;
    }
    return false;
}

console.log(foo(0));
console.log(foo(""));
console.log(foo(null));
console.log(foo(undefined));
console.log(foo(NaN));
console.log(foo(false));


//return the sum of two values only if both are numbers; else return “Invalid input”.
function sumNumbers(a,b){
    if(typeof(a) == "number" && typeof(b)== "number"){
        return a+b;
    } else {
        return "Involid input";
    }
}

console.log(sumNumbers(5,4));
console.log(sumNumbers(5,"4"));