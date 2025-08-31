// union, type literals, type alias
var fName = "abd";
var age;
age = 22;
// union types
var persons = [
    {
        // id: 1,
        id: "23434dff",
        name: "abd",
    },
    {
        id: 2,
        name: "su",
    },
];
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return a.toString() + " " + b.toString();
}
function multiply(a, b, c) {
    var isNumbers = typeof a === "number" && typeof b === "number" && typeof c === "number";
    if (isNumbers) {
        return a * b * c;
    }
    return a.toString() + b + c;
}
function printObject(person) {
    console.log(person);
}
console.log(add(20, "Abdullah"));
console.log(multiply(20, " Abdullah ", 30));
console.log(multiply(20, 10, 30));
printObject({ id: 23, name: "abd", age: 22, isEducated: true });
