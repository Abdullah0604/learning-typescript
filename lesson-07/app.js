//---> type guards = er mane holo just js er typeof diye extra type check kora
console.log("hello world from type guard");
function add(a, b) {
    //  add type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var emp1 = {
    name: "Abdullah",
    privilage: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log("Name: ", emp.name);
    // add type guards = karon ekhane admin or employee kunta confirm na
    if ("privilage" in emp) {
        console.log("Privilage: ", emp.privilage);
    }
    if ("startDate" in emp) {
        console.log("Start Date: ", emp.startDate.toISOString());
    }
}
printEmployeeInformation(emp1);
printEmployeeInformation({
    name: "ahad",
    privilage: ["create-ui"],
});
printEmployeeInformation({
    name: "Karim",
    startDate: new Date(),
});
