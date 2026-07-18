Function.prototype.myApply = function(thisArg, args = []){
    const fn = Symbol();
    thisArg[fn] = this;
    const result = thisArg[fn](...args);
    delete thisArg[fn];
    return result;
}

const person = {
    name: "Diana",
};

function greet(age, city) {
    return `${this.name}, ${age}, ${city}`;
}

console.log(greet.myApply(person, [22, "Yerevan"]));