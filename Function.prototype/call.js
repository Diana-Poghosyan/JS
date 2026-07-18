Function.prototype.myCall = function(thisArg, ...args){
    const s = Symbol();
    thisArg[s] = this;
    const result = thisArg[s](...args);
    delete thisArg[s];
    return result;
}

function greet(age, city) {
    console.log(this.name);
    console.log(age);
    console.log(city);
}
let person = {
    name: "Diana"
};
greet.myCall(person, 18, "Yerevan");