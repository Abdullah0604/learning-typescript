//---> function return type
function divider(a, b) {
    return a / b;
}
// function divider(a:number, b: number): string {
//    return (a/b).toString()
// }
function isInteger(a, b) {
    if (a % b === 0) {
        return true;
    }
    return false;
}
function printObject(person) {
    console.log(person);
}
// console.log(isInteger(4, 2));
var person = {
    id: 2,
    name: "abd",
    isEducated: true,
    education: [
        {
            gpa: 5.0,
            institution: "ftc",
        },
    ],
    favBooks: ["chemi", 230],
};
// printObject(person);
//---> let's how to type assign in a variable for function
// let result: Function;
// result = 20 invalid
// result = "abd" invalid
// result = isInteger valid but not good practices
//---> let's see the good practices
var output;
output = divider;
var result;
result = isInteger;
// console.log(result(8, 2));
//---> let's see the good practices of function type & callbacks
function oddHandler(a, b, cb) {
    var result = a + b;
    var isOdd = cb(result, b);
    return isOdd;
}
console.log("This sum is odd:  ", oddHandler(5, 6, function (n, divider) {
    if (n % divider !== 0) {
        return true;
    }
    return false;
}));
