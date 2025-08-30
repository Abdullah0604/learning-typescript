// object, array, tuple, enum

const person: {
  name: string;
  age: number;
  education: {
    HSC: {
      gpa: number;
      passing_year: string;
    };
    SSC: {
      gpa: number;
      passing_year: string;
    };
  };
  skills: string[];
  favNumber: number[];
} = {
  name: "akash",
  age: 23,
  education: {
    HSC: { gpa: 4.92, passing_year: "2023-2024" },
    SSC: { gpa: 5.0, passing_year: "2023-2024" },
  },
  skills: ["react js", "next js", "node js"],
  favNumber: [14, 25, 6],
};

let firstName: string | number;
let age: number;
let fruits: (string | number)[] = [20, "apple"];
let books: string[] = ["physics", "chemistry"];
age = 20;
firstName = "akib";

// tuple
let products: [number, string] = [20, "abd"];
// console.log(person);

//enum
enum Role {
  AUTHOR,
  ADMIN,
  USER_READ_ONLY,
}
const person2 = {
  name: "abd",
  age: 22,
  skills: ["React", "Node"],
  product: [10, "Macbook Air M2"],
  role: Role.AUTHOR,
};

if (person2.role === Role.ADMIN) {
  console.log("you are admin");
} else if (person2.role === Role.AUTHOR) {
  console.log("you are author");
} else if (person2.role === Role.USER_READ_ONLY) {
  console.log("you are normal user");
}
