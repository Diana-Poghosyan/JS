Function.prototype.myBind = function(thisArg, ...args){
    const fn = this;

    return function(...Newargs){
       return fn.apply(thisArg, [...Newargs, ...args]);
    };
};

const person = {
    name: "Diana",
};
function greet(age, city) {
    console.log(`Hi, I'm ${this.name}, from ${city}, ${age} years old`);
}
const bound = greet.myBind(person, "Yerevan");
bound(22);