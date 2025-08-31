//---> type guards = er mane holo just js er typeof diye extra type check kora
console.log("hello world from type guard");

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  //  add type guards
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// console.log(add(30, 40));
// console.log(add(30, "50"));

// example 2.
type Admin = {
  name: string;
  privilage: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

const emp1: ElevatedEmployee = {
  name: "Abdullah",
  privilage: ["create-server"],
  startDate: new Date(),
};

function printEmployeeInformation(emp: UnknownEmployee) {
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
