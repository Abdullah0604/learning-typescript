// union, type literals, type alias
let fName: string = "abd";
let age: number;
age = 22;

// union types
const persons: { id: number | string; name: string }[] = [
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

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return a.toString() + " " + b.toString();
}

// type alias
type NumOrStr = string | number;

function multiply(a: NumOrStr, b: NumOrStr, c: NumOrStr) {
  const isNumbers =
    typeof a === "number" && typeof b === "number" && typeof c === "number";
  if (isNumbers) {
    return a * b * c;
  }

  return a.toString() + b + c;
}
console.log(add(20, "Abdullah"));
console.log(multiply(20, " Abdullah ", 30));
console.log(multiply(20, 10, 30));
