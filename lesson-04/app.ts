//---> function return type

function divider(a: number, b: number): number {
  return a / b;
}

// function divider(a:number, b: number): string {
//    return (a/b).toString()
// }

function isInteger(a: number, b: number): boolean {
  if (a % b === 0) {
    return true;
  }
  return false;
}

type Person = {
  id: number;
  name: string;
  isEducated: boolean;
  education: { gpa: number; institution: string }[];
  favBooks: (string | number)[];
};

function printObject(person: Person): void {
  console.log(person);
}
// console.log(isInteger(4, 2));
const person: Person = {
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

let output: (a: number, b: number) => number;
output = divider;
// console.log(output(4, 2));

//---> let's see the good practices using type alias

type Output = (a: number, b: number) => boolean;

let result: Output;
result = isInteger;

// console.log(result(8, 2));

//---> let's see the good practices of function type & callbacks

// function oddHandler(
//   a: number,
//   b: number,
//   cb: (n: number, divider: number) => boolean
// ): boolean {
//   const result = a + b;
//   const isOdd = cb(result, b);
//   return isOdd;
// }

// console.log(
//   "This sum is odd:  ",
//   oddHandler(5, 6, (n, divider) => {
//     if (n % divider !== 0) {
//       return true;
//     }
//     return false;
//   })
// );

//---> let's see using type
type CB = (n: number, divider: number) => boolean;

function oddHandler(a: number, b: number, cb: CB): boolean {
  const result = a + b;
  const isOdd = cb(result, b);
  return isOdd;
}

console.log(
  "This sum is odd:  ",
  oddHandler(5, 6, (n, divider) => {
    if (n % divider !== 0) {
      return true;
    }
    return false;
  })
);
